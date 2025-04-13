import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAddReceiptClick = (option: 'redirect' | 'modal') => {
    if (option === 'redirect') {
      navigate('/add-receipt');
    } else if (option === 'modal') {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const completedData = [
    { plateNumber: 'B1234XYZ', date: '2025-04-12', time: '10:00', suratJalan: 'SJ001' },
    { plateNumber: 'D5678ABC', date: '2025-04-12', time: '11:30', suratJalan: 'SJ002' },
  ];

  const inProgressData = [
    { plateNumber: 'E9101DEF', date: '2025-04-13', time: '09:00', suratJalan: 'SJ003' },
  ];

  const queueData = [
    { plateNumber: 'F1213GHI', date: '2025-04-13', time: '10:30', suratJalan: 'SJ004' },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-4">
      {/* Header */}
      <header className="bg-black text-white p-4 border-4 border-black mb-4">
        <h1 className="text-3xl font-extrabold">Dashboard - PT. Penerimaan Barang</h1>
      </header>

      {/* Modal for Adding Receipt */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg mx-4">
            <h2 className="text-xl font-bold mb-4">Add New Receipt</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Plate Number</label>
                <input type="text" className="w-full border rounded p-2" placeholder="Enter plate number" title="Plate Number" style={{ backgroundColor: '#e1e1e1' }} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Date</label>
                <input type="date" className="w-full border rounded p-2" title="Date" style={{ backgroundColor: '#e1e1e1' }} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Time</label>
                <input type="time" className="w-full border rounded p-2" title="Time" style={{ backgroundColor: '#e1e1e1' }} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Surat Jalan</label>
                <input type="text" className="w-full border rounded p-2" placeholder="Enter Surat Jalan" title="Surat Jalan" style={{ backgroundColor: '#e1e1e1' }} />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Section 1: Company Info and Current Time */}
      <section className="bg-yellow-300 p-4 border-4 border-black mb-4">
        <h2 className="text-2xl font-bold mb-2">Company Information</h2>
        <p>Company Name: <span className="font-bold">PT. Penerimaan Barang</span></p>
        <p>Current Date and Time: <span className="font-bold">{currentTime.toLocaleString()}</span></p>
      </section>

      {/* Add New Receipt Button */}
      <div className="mb-4">
        <button
          className="bg-green-500 text-black border-4 border-black px-4 py-2 rounded-none flex items-center justify-center gap-2"
          onClick={() => handleAddReceiptClick('modal')}
        >
          <FaPlus /> Add New Receipt (Modal)
        </button>
      </div>

      {/* Section 2: Data Tables */}
      <section className="bg-red-300 p-4 border-4 border-black mb-4">
        <h2 className="text-2xl font-bold mb-4">Goods Receipt Data</h2>

        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Completed Goods Receipt</h3>
          <table className="w-full border-4 border-black">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border-2 border-white p-2">Plate Number</th>
                <th className="border-2 border-white p-2">Date</th>
                <th className="border-2 border-white p-2">Time</th>
                <th className="border-2 border-white p-2">Surat Jalan</th>
              </tr>
            </thead>
            <tbody>
              {completedData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  <td className="border-2 border-black p-2">{item.plateNumber}</td>
                  <td className="border-2 border-black p-2">{item.date}</td>
                  <td className="border-2 border-black p-2">{item.time}</td>
                  <td className="border-2 border-black p-2">{item.suratJalan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">In-Progress Goods Receipt</h3>
          <table className="w-full border-4 border-black">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border-2 border-white p-2">Plate Number</th>
                <th className="border-2 border-white p-2">Date</th>
                <th className="border-2 border-white p-2">Time</th>
                <th className="border-2 border-white p-2">Surat Jalan</th>
              </tr>
            </thead>
            <tbody>
              {inProgressData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  <td className="border-2 border-black p-2">{item.plateNumber}</td>
                  <td className="border-2 border-black p-2">{item.date}</td>
                  <td className="border-2 border-black p-2">{item.time}</td>
                  <td className="border-2 border-black p-2">{item.suratJalan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Queue Goods Receipt</h3>
          <table className="w-full border-4 border-black">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border-2 border-white p-2">Plate Number</th>
                <th className="border-2 border-white p-2">Date</th>
                <th className="border-2 border-white p-2">Time</th>
                <th className="border-2 border-white p-2">Surat Jalan</th>
              </tr>
            </thead>
            <tbody>
              {queueData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-200">
                  <td className="border-2 border-black p-2">{item.plateNumber}</td>
                  <td className="border-2 border-black p-2">{item.date}</td>
                  <td className="border-2 border-black p-2">{item.time}</td>
                  <td className="border-2 border-black p-2">{item.suratJalan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Notice Board */}
      <section className="bg-green-300 p-4 border-4 border-black">
        <h2 className="text-2xl font-bold mb-2">Notice Board</h2>
        <p>Admin announcements will appear here.</p>
      </section>
    </div>
  );
};

export default Dashboard;