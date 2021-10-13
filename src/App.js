import React, { useEffect, useState, useCallback } from 'react';
import { ethers } from 'ethers';
import './App.css';
import abi from './utils/WavePortal.json';
import { TwitterPicker } from 'react-color';

const contractAddress = '0x0AdC3DF39f80783a79Df184B01e0fe9e07B6678D';
const contractABI = abi.abi;

const getWavePortalContract = (ethereum) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const wavePortalContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer,
  );
  return wavePortalContract;
};

function Loading() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default function App() {
  const [mining, setMining] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [activeCell, setActiveCell] = useState({ x: 0, y: 0 });
  const [tempColor, setTempColor] = useState('#fff');
  const [cells, setCells] = useState([]);
  const [currentAccount, setCurrentAccount] = useState('');

  const hideColorPicker = () => {
    setShowColorPicker(false);
  };

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      hideColorPicker();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });

  const updateCell = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        return console.log("Ethereum object doesn't exist!");
      }
      const wavePortalContract = getWavePortalContract(ethereum);
      setMining(true);
      const waveTxn = await wavePortalContract.addCell(
        tempColor,
        activeCell.x,
        activeCell.y,
        {
          gasLimit: 300000,
        },
      );
      await waveTxn.wait();
      await updateAllCellsFromETH(wavePortalContract);
    } catch (error) {
      console.log(error);
    } finally {
      setMining(false);
    }
  };

  const updateCellColor = (x, y, color, from) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[x][y].color = color;
      newCells[x][y].author = from;
      return newCells;
    });
  };

  const updateAllCellsFromETH = async (wavePortalContract) => {
    const rawGrid = await wavePortalContract.getAllCells();
    const cells = [];
    rawGrid.forEach((rawItem) => {
      const row = [];
      rawItem.forEach((cell) => {
        row.push({
          color: cell.color,
          author: cell.author,
        });
      });
      cells.push(row);
    });
    setCells(cells);
  };

  const getAllCells = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        return console.log("Ethereum object doesn't exist!");
      }
      const wavePortalContract = getWavePortalContract(ethereum);
      await updateAllCellsFromETH(wavePortalContract);

      wavePortalContract.on('NewCell', (from, timestamp, color, x, y) => {
        updateCellColor(x, y, color, from);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Make sure you have metamask!');
        return;
      }
      console.log('We have the ethereum object', ethereum);

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Found an authorized account:', account);
        setCurrentAccount(account);
      } else {
        console.log('No authorized account found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCells();
  }, []);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const picker = showColorPicker && (
    <div
      style={{
        position: 'absolute',
        left: activeCell.y * 42,
        top: activeCell.x * 42 + 53,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 10,
      }}
    >
      <TwitterPicker
        color={tempColor}
        onChangeComplete={(color) => {
          setTempColor(color.hex);
        }}
      />
      <div className="button-container">
        <button onClick={updateCell}>Update Cell</button>
        <button onClick={hideColorPicker}>Cancel</button>
      </div>
    </div>
  );

  const overlay = (
    <div
      className="closePicker"
      onClick={hideColorPicker}
      style={{
        zIndex: mining ? 1 : 0,
        backgroundColor: mining ? 'rgb(255 123 11 / 50%)' : 'transparent',
      }}
    >
      {mining && <Loading />}
    </div>
  );

  return (
    <div className="mainContainer">
      {overlay}
      <div className="header">
        🪀 Hey there! Choose a grid cell and update its color on a blockchain!
      </div>
      <div className="dataContainer">
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        {picker}
        <div className="grid-container">
          {cells.map((rowItems, x) => {
            return (
              <div key={x} className="row">
                {rowItems.map((cell, y) => {
                  const color =
                    showColorPicker && x === activeCell.x && activeCell.y === y
                      ? tempColor
                      : cell.color || '#fff';

                  const onCellSelected = () => {
                    setActiveCell({ x, y });
                    setTempColor(color);
                    setShowColorPicker(true);
                  };
                  return (
                    <div
                      className="cell"
                      style={{ backgroundColor: color }}
                      key={y}
                      onClick={onCellSelected}
                    >
                      {cell.color && (
                        <span className="tooltiptext">{cell.author}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
