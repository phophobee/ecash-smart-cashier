import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import RegisterForm from './RegisterForm'; // pastikan path sesuai lokasi file
import LoginForm from './LoginForm'; // pastikan path sesuai lokasi file
import { UserContext } from '../context/UserContext';

export default function Navbar() {
  const { userName, setUserName } = useContext(UserContext);
  const { myPoint } = useContext(UserContext);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { setScrollTarget } = useContext(UserContext);
  const navigate = useNavigate();

const handleMenuClick = (item) => {
  if (!userName) {
    alert('Anda harus login terlebih dahulu.');
    return;
  }

  if (item === 'Master Barang') {
    navigate('/master-barang');
  } 
  else if (item === 'Master Customer') {
    navigate('/master-customer');
  }
  else if (item === 'Pembelian') {
    navigate('/pembelian');
  }
  else if (item === 'Beranda') {
    navigate('/');
  }

  // Tambahan scroll ke bagian tertentu
  const lower = item.toLowerCase();
  if (['promosi', 'favourite', 'testimoni', 'contact us'].includes(lower)) {
    navigate('/');
    setScrollTarget(lower); // simpan tujuan scroll
  }
};

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  const handleLogout = () => {
    setUserName('');
    setShowMenu();
  };

  const menuItems = [
    {
      name: 'Beranda',
      sub: ['Promosi', 'Favourite', 'Testimoni', 'Contact Us']
    },
    {
      name: 'Transaksi',
      sub: ['Transaksi Barang Masuk', 'Pembelian', 'Register Transaksi Barang Masuk', 'Register Pembelian', 'Riwayat Point Customer']
    },
    {
      name: 'Gudang',
      sub: ['Stok Tersedia', 'History Barang']
    },
    {
      name: 'Laporan',
      sub: ['Laporan Item Penjualan', 'Laporan Omset Customer', 'Laporan History Point']
    },
    {
      name: 'Master Data',
      sub: ['Master Barang', 'Master Customer']
    },
    {
      name: 'Manajemen',
      sub: ['Setting Aplikasi', 'Promosi', 'Testimoni', 'Favourite']
    },
  ];

  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow relative z-50">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-10 mr-2" />
          <span className="text-xl font-bold text-purple-500 font-poppins_extra">
            HANINA<span className="text-pink-400 font-poppins_bold"> Aplikasi</span>
          </span>
        </div>

        <nav className="hidden md:flex space-x-6 text-pink-600">
          {menuItems.map((menu, idx) => (
            <Popover className="relative" key={idx}>
              <Popover.Button className="flex items-center hover:text-purple-600 font-medium focus:outline-none">
                {menu.name}
                <ChevronDown className="w-4 h-4 ml-1" />
              </Popover.Button>

              <Popover.Panel className="absolute z-10 mt-2 w-48 bg-white border rounded-md shadow-lg">
                {menu.sub.map((item, subIdx) => (
                  <div
                    key={subIdx}
                    onClick={() => handleMenuClick(item)}
                    className="px-4 py-2 text-sm hover:bg-pink-300 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </Popover.Panel>
            </Popover>
          ))}
        </nav>
        
        <div className='flex items-center gap-3'>
          {!userName && (
          <>
          <div className="space-x-2">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-purple-600 hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full text-white text-sm"
            >
              LOGIN
            </button>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setShowRegister(true)}
              className="bg-pink-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-full text-white text-sm"
            >
              DAFTAR
            </button>
          </div>
          </>
          )}
          {userName && (<div className='space-x-2 flex flex-row justify-center items-center'>
            <div className='flex flex-col'>
              <span className='font-poppins_extra text-right text-sm text-purple-600'>{userName}</span>
              <span className='text-sm text-right text-pink-400'>{(myPoint).toLocaleString()} point</span>
            </div>
            <img src="/images/me.png" alt="avatar" className='rounded-[50%] h-10 hover:cursor-pointer' onClick={toggleMenu}/>
          </div>)}
        </div>
      </header>

      {showRegister && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl z-10"
              onClick={() => setShowRegister(false)}
            >
              ✖
            </button>
            <RegisterForm />
          </div>
        </div>
      )}
      {showLogin && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl z-10"
              onClick={() => setShowLogin(false)}
            >
              ✖
            </button>
            <LoginForm onLoginSuccess={() => setShowLogin(false)}/>
          </div>
        </div>
      )}
      {showMenu && (
            <div className='flex flex-row justify-between absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10'>
              <button
                onClick={handleLogout}
                className='w-full px-4 py-2 text-left text-sm text-purple-600 hover:bg-pink-200'
              >
                Logout
              </button>
              <button
                onClick={() => setShowMenu()}
                className='w-full px-4 py-2 items-center text-sm hover:bg-pink-200'
              >
                ✖
              </button>
            </div>
          )}
    </>
  );
}
