import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './defaults.css';

// إمبراطورية BM PYRAMIDS - واجهة الكواكب المحمية
const BMPyramidsApp = () => {
  const [privacyMask, setPrivacyMask] = useState(true);
  const userBalance = "9920.87 Pi"; // الرصيد الإمبراطوري المحمي

  useEffect(() => {
    // تفعيل بروتوكول Pi SDK الرسمي
    if (window.Pi) {
      window.Pi.init({ version: "1.5", sandbox: true });
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: '#ffd700', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
      <h1>👑 إمبراطورية BM PYRAMIDS 👑</h1>
      <p>مرحباً بك في المجرة الرقمية الموثقة</p>
      
      {/* درع الخصوصية الإمبراطوري */}
      <div style={{ border: '2px solid #ffd700', padding: '15px', margin: '20px auto', maxWidth: '400px', borderRadius: '15px' }}>
        <h3>الرصيد الملكي:</h3>
        <h2 onClick={() => setPrivacyMask(!privacyMask)} style={{ cursor: 'pointer' }}>
          {privacyMask ? "██████████" : userBalance}
        </h2>
        <small>(اضغط على القناع للكشف/الإخفاء)</small>
      </div>

      {/* نظام الـ 15 كوكب */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '15px', marginTop: '30px' }}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} style={{ padding: '20px', background: 'linear-gradient(45deg, #1a1a1a, #333)', borderRadius: '50%', border: '1px solid #ffd700' }}>
            🪐 كوكب {i + 1}
          </div>
        ))}
        <button 
  style={{
    marginTop: '30px',
    padding: '15px 40px',
    backgroundColor: '#ffd700',
    color: '#000',
    fontWeight: 'bold',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem'
  }}
  onClick={() => window.Pi.createPayment({
    amount: 1,
    memo: "شراء كوكب إمبراطوري جديد",
    metadata: { planetId: 16 }
  }, {
    onReadyForServerApproval: (paymentId) => console.log(paymentId),
    onReadyForServerCompletion: (paymentId, txid) => console.log(txid),
    onCancel: (paymentId) => console.log("Cancelled"),
    onError: (error, paymentId) => console.log(error)
  })}
>
  💎 تفعيل بوابة الدفع (1 Pi)
</button>
      </div>

      <footer style={{ marginTop: '50px', fontSize: '12px' }}>
        تم التوثيق والربط عبر Pi Network Testnet 🚀
      </footer>
    </div>
  );
};

ReactDOM.render(<BMPyramidsApp />, document.getElementById('root'));
