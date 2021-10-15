
function App() {
  return (
    <div className='wrapper clear'>

      <div className='overlay'>
        <div className='drawer'> 
        <h2 className='mb-30 d-flex justify-between' >Корзина <img className='cu-p' src='/img/bt_remove.svg' alt='Remove'/></h2>

      <div className='items'>


      <div className='cartItem d-flex align-center mb-20'>
         <div style={{backgroundImage: 'url(img/sneakers/1.png)' }} className='cartItemImg'></div>
          <div className='mr-20 flex'>
            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
            <b>650$</b>
          </div>
          <img className='removeBtn' src='/img/bt_remove.svg' alt='Remove'/>
        </div>




        <div className='cartItem d-flex align-center  mb-20'>
         <div style={{backgroundImage: 'url(img/sneakers/2.png)' }} className='cartItemImg'></div>
          <div className='mr-20 flex'>
            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
            <b>650$</b>
          </div>
          <img className='removeBtn' src='/img/bt_remove.svg' alt='Remove'/>
        </div>



   

      </div>


<div className='cartTotalBlock'>
    <ul >
        <li>
          <span>Итого</span>
          <div></div>
          <b>650$</b>
        </li>
        <li>
          <span>Налог 5%</span>
          <div></div>
          <b>42$</b>
        </li>
      </ul>
      <button className='greanButton'>Оформить заказ<img src='/img/arrow.svg' alt='arrow'/></button>
      </div>
     




        </div>
      </div>

      




      <header className="d-flex justify-between align-center p-40" >
        <div className='d-flex align-center '>
        <img width={70} height={60} src='/img/logo.png'/>
        <div className='headerInfo'>
          <h3 className='text-uppercase'>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
        </div>
       
        <ul className='d-flex'>
            <li className='mr-30'>
            <img width={18} height={18} src='/img/cart.svg'/>
            <span>650$</span></li>
            <li>
            <img width={20} height={20} src='/img/user.svg'/>
              </li>
        </ul>
      </header>

      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between' >
          <h1> Все кросовки</h1> 
        <div className='search-block d-flex'>
          <img src='/img/search.svg' alt='Search'/>
          <input placeholder='Поиск...' />
        </div>
        </div>

      <div className='d-flex'>
      <div className='card'>
        <div className='favorite'>
          <img src='/img/heart_unliked.svg' alt='unliked'/>
          </div>
          <img  width={133} height={112} src='/img/sneakers/1.png' alt='Sneakers'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>650$</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt='plus'/>
            </button>
          </div>
        </div>
        <div className='card'>
          <img  width={133} height={112} src='/img/sneakers/2.png' alt='Sneakers'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>650$</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt='plus'/>
            </button>
          </div>
        </div>
        <div className='card'>
          <img  width={133} height={112} src='/img/sneakers/3.png' alt='Sneakers'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>650$</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt='plus'/>
            </button>
          </div>
        </div>
        <div className='card'>
          <img  width={133} height={112} src='/img/sneakers/4.png' alt='Sneakers'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>650$</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/img/plus.svg" alt='plus'/>
            </button>
          </div>
        </div>

      </div>
      </div>




    </div>
  );
}

export default App;
