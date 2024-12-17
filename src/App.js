import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import Russia from './components/Russia.webp'
import Britain from './components/Britain.png'
import China from './components/China.png'
import Japan from './components/Japan.png'
import Frame from './components/Frame'
import PricingCards from './components/PricingCards.jsx'
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
        {/* <button className='btn1'>Войти</button> */}


         
          <div className='wrapper'>
                  <h1>Языки, друзья <br></br> и многое другое без <br></br> ограничений</h1>

                  <p>От 7,99 €. Отменить подписку можно в любое время.</p>

                  <p className='second'>Готовы смотреть? Введите адрес электронной почты, чтобы оформить или  <br></br> возобновить подписку.</p>

              <div className='registr'>
                  <input placeholder="Адрес элеткронной почты"></input>
                  <a href='#prices'><button type='submit' className='btn2'>Начать учиться</button></a>
              </div>
            </div>

            <div className='Languages'>
              <h3>Мы учим :</h3>

              <div className='Leng'>
                  <img src='data:image/jpeg;base64,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'></img>
                  

                 <a href='#prices'><Card src={Russia}></Card></a> 
                 <a href='#prices'><Card src={Britain}></Card></a> 
                 <a href='#prices'><Card src={China}></Card></a> 
                 <a href='#prices'><Card src={Japan}></Card></a> 
              </div>
            </div>




            <main>

          

<h2 className='add-h2'> С подпиской вы получаете:  </h2>


              <div className='advertisement'>
              {/* <h2>Причины подписаться:</h2> */}
              </div>
              <Frame heading='Смотрите на телевизоре' text='Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах Blu-ray и других устройствах.'></Frame>
              <Frame heading="Загружайте сериалы для просмотра офлайн" text='Сохраняйте любимые видео, и у вас всегда будет что посмотреть.'></Frame>
              <Frame heading='Смотрите где угодно' text='Смотрите фильмы и сериалы на телефоне, планшете, ноутбуке и телевизоре.'></Frame>
              <Frame heading='Создавайте профили для детей' text='Подарите детям мир приключений с их любимыми героями. Он создан специально для них и доступен с вашей подпиской.'></Frame>
            </main>

            <div id='prices'>
      <h1 style={{ textAlign: 'center', margin: '40px 0', color: '#333' }}>
         Выберите свой план
      </h1>
      <PricingCards />
    </div>
    
      </div> 
      <Footer></Footer>
    </div>
  );
}

export default App;
