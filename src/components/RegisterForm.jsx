import React, { useState } from 'react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    password1: '',
    password2: '',
    storeName: '',
    address: '',
    phone: '',
    email: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      const emailValid = /\S+@\S+\.\S+/.test(value);
      setEmailError(emailValid ? '' : 'Email tidak valid');
    }
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      alert('Password tidak sama');
      return;
    }
    alert('Form berhasil dikirim');
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
              name="password1"
              placeholder="Password"
              value={formData.password1}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password2"
              placeholder="Konfirmasi Password"
              value={formData.password2}
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

          <input
            type="text"
            name="storeName"
            placeholder="Nama Toko"
            value={formData.storeName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Alamat Toko"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Nomor Handphone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Alamat Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-pink-600"
          >
            Daftar Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}
