import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function LoginForm({onLoginSuccess}) {
  const [formData, setFormData] = useState({
    name: '',
    passwordisi : '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const { userName, setUserName, password } = useContext(UserContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name !== 'admin') {
      alert('username ' + formData.name + ' BELUM terdaftar');
      return;
    }
    else if (formData.passwordisi !== password) {
      alert('password TIDAK benar..');
      return;
    }
    setUserName(formData.name);
    alert('Form berhasil dikirim');
    onLoginSuccess();
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-white rounded-lg overflow-hidden">
      {/* Kiri - Ucapan Selamat Datang */}
      <div className="md:w-1/2 bg-gradient-to-r from-purple-600 to-pink-600 p-6 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Selamat Datang di eCash Smart Cashier</h2>
        <p className="text-white text-sm">
          Dengan mendaftarkan diri Anda pada aplikasi ini, dapatkan keuntungan lebih dari kami dan menikmati beragam promosi yang tersedia. Segera perbanyak point untuk keuntungan EXTRA.
        </p>
      </div>

      {/* Kanan - Form */}
      <div className="md:w-1/2 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nama User"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex gap-2">
            <input
              type={showPassword ? 'text' : 'password'}
              name="passwordisi"
              placeholder="Password"
              value={formData.passwordisi}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="button"
            onClick={togglePassword}
            className="text-sm text-blue-500 hover:underline"
          >
            {showPassword ? 'Sembunyikan Password' : 'Tampilkan Password'}
          </button>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-pink-600"
          >
            Log IN
          </button>
        </form>
      </div>
    </div>
  );
}
