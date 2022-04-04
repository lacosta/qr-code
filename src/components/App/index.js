// @own
import './styles.scss';
import Card from 'components/Card';
import Footer from 'components/Footer';
import imageQR from 'assets/image-qr-code.png';

const App = () => {
  return (
    <div className='app'>
      <Card
        description='Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
        image={imageQR}
        title='Improve your front-end skills by building projects'
      />
      <Footer />
    </div>
  );
};

export default App;
