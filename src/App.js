import React, { useEffect, useState, useCallback, Fragment } from 'react';
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

export default function App() {
  const [mining, setMining] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(true);
  const [activeCell, setActiveCell] = useState({ x: 0, y: 0 });
  const [cells, setCells] = useState([]);
  const [currentAccount, setCurrentAccount] = useState('');

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setShowColorPicker(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  });

  const wave = async () => {
    // try {
    //   const { ethereum } = window;
    //   if (!ethereum) {
    //     return console.log("Ethereum object doesn't exist!");
    //   }
    //   const wavePortalContract = getWavePortalContract(ethereum);
    //   let count = await wavePortalContract.getTotalWaves();
    //   console.log('Retrieved total wave count...', count.toNumber());
    //   setMining(true);
    //   const waveTxn = await wavePortalContract.wave(inputEl.current.value, {
    //     gasLimit: 300000,
    //   });
    //   inputEl.current.value = '';
    //   console.log('Mining...', waveTxn.hash);
    //   await waveTxn.wait();
    //   console.log('Mined -- ', waveTxn.hash);
    //   count = await wavePortalContract.getTotalWaves();
    //   setCounter(count.toNumber());
    //   setMining(false);
    //   console.log('Retrieved total wave count...', count.toNumber());
    // } catch (error) {
    //   setMining(false);
    //   console.log(error);
    // }
  };

  const getAllCells = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        return console.log("Ethereum object doesn't exist!");
      }
      const wavePortalContract = getWavePortalContract(ethereum);
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
      console.log({ cells, rawGrid });

      setCells(cells);

      wavePortalContract.on('NewCell', (from, timestamp, color, x, y) => {
        console.log({ from, timestamp, color, x, y });

        // setAllWaves((prevState) => [
        //   ...prevState,
        //   {
        //     address: from,
        //     timestamp: new Date(timestamp * 1000),
        //     message: message,
        //   },
        // ]);
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
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    getAllCells();
  }, []);

  const updateCellColor = (x, y, color) => {
    console.log({ x, y, color });
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[x][y].color = color;
      return newCells;
    });
  };

  const picker = showColorPicker && (
    <div
      style={{
        position: 'absolute',
        left: activeCell.y * 42,
        top: activeCell.x * 42 + 53,
      }}
    >
      <TwitterPicker
        color={cells[activeCell.x]?.[activeCell.y].color || '#fff'}
        onChangeComplete={(color) => {
          updateCellColor(activeCell.x, activeCell.y, color.hex);
        }}
      />
    </div>
  );

  return (
    <div className="mainContainer">
      <div className="header">🪀 Hey there!</div>
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
                  return (
                    <div
                      className="cell"
                      style={{ backgroundColor: cell.color || '#fff' }}
                      index={y}
                      onClick={() => {
                        console.log({ x, y });
                        setShowColorPicker(true);
                        setActiveCell({ x, y });
                      }}
                    ></div>
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
