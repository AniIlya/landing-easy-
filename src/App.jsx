
import "./App.css"
import logo from "./assets/logo1.png"
import email from "./assets/email.png"
import menu from "./assets/menu.png"
import img1 from "./assets/img1.png"
import icn1 from "./assets/icn1.png"
import img2 from "./assets/img2.png"
import icn2 from "./assets/icn2.png"
import logo2 from "./assets/logo2.png"
import icn6 from "./assets/icn6.png"
import icn3 from "./assets/icn3.png"
import icn4 from "./assets/icn4.png"
import icn5 from "./assets/icn5.png"
function App() {
  return (
    <div>
    <header className="absolute left-[15%] w-[70%] m-auto grid grid-cols-2 ">
      <div className="place-self-start">
         <img src={logo} alt="" />
        </div>
          <div className="place-self-end">
         <img src={menu} alt="" />
          </div>
    </header>
    <section className="bg">
<div className="w-[50%] m-auto text-center ">
  <h1 className="text-white lg:text-5xl md:text-3xl text-lg font-bold pt-[25%]">РЕАЛИЗУЕМ КРУПНЕЙШИЕ
ПРОЕКТЫ В РОССИИ</h1>
<p className="text-white md:text-xl text-md font-medium py-[7%]">стадионы, газопроводы, мосты, дамбы</p>
</div>
<div className="bg-[#F7F7F7] px-[5%] py-[3%] grid lg:grid-cols-4 grid-cols-2  gap-[5%] w-[70%] m-auto">
<div className="text-center">
<h1 className="text-[#F7654A] text-5xl font-semibold">26</h1>
<p className="text-[#000000] text-4xl py-2 font-medium">лет</p>
<p className="text-[#999999] text-xl font-normal">на рынке</p>
</div>
<div className="text-center">
<h1 className="text-[#F7654A] text-5xl font-semibold">26</h1>
<p className="text-[#000000] text-4xl py-2 font-medium">лет</p>
<p className="text-[#999999] text-xl font-normal">на рынке</p>
</div>
<div className="text-center">
<h1 className="text-[#F7654A] text-5xl font-semibold">26</h1>
<p className="text-[#000000] text-4xl py-2 font-medium">лет</p>
<p className="text-[#999999] text-xl font-normal">на рынке</p>
</div>
<div className="text-center">
<h1 className="text-[#F7654A] text-5xl font-semibold">26</h1>
<p className="text-[#000000] text-4xl py-2 font-medium">лет</p>
<p className="text-[#999999] text-xl font-normal">на рынке</p>
</div>
</div>
    </section>
    <main>
<section className="w-[70%] m-auto text-center py-[6%]">
  <h1 className="text-[#404149] font-semibold text-3xl">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h1>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[2%] py-[5%]">
    <div className="text-start">
<img className="w-full" src={img1} alt="" />
<div className="bg-[#F7654A] pt-2 w-[35%] my-4 rounded-lg"></div>
  <p className="text-[#404149] text-2xl font-normal py-2 ">Газпром Арена</p>
  <p className="w-[95%] text-[#999999]">Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
</div>
<div className="text-start">
<img className="w-full" src={img1} alt="" />
<div className="bg-[#F7654A] pt-2 w-[35%] my-4 rounded-lg"></div>
  <p className="text-[#404149] text-2xl font-normal py-2 ">Газпром Арена</p>
  <p className="w-[95%] text-[#999999]">Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
</div>
<div className="text-start">
<img className="w-full" src={img1} alt="" />
<div className="bg-[#F7654A] pt-2 w-[35%] my-4 rounded-lg"></div>
  <p className="text-[#404149] text-2xl font-normal py-2 ">Газпром Арена</p>
  <p className="w-[95%] text-[#999999]">Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
</div>
  </div>
</section>
<section className="bg-[#F7654A] px-[15%] py-[4%] mt-[10%] md:mt-0">
<div className="grid lg:grid-cols-[60%,40%]">
  <div className="m-auto lg:m-0 ">
  <h1 className="text-white font-medium text-4xl">САМЫЕ УМНЫЕ ПРОЕКТЫ</h1>
  <p className="text-white font-normal text-xl py-2">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</p>
  </div>
  <div className="">
    <div className="bg-white flex p-[4%] w-[50%] lg:ml-auto m-auto justify-between">
      <div className="self-center"><img className="w-full" src={email} alt="" /></div>
     <p className="text-lg">ВАШ ЗАПРОС</p>
    </div>
  </div>
</div>
</section>
<section className="w-[70%] m-auto text-center py-[6%]">
  <h1 className="text-[#404149] font-semibold text-3xl">ЧЕМ МЫ ЗАНИМАЕМСЯ?</h1>
  <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-[5%] py-[5%] ">
    <div className="bg-[#F7F7F7] p-[15%] text-center">
<img className="m-auto" src={icn1} alt="" />
<p className="text-[#000000] text-lg font-medium py-4"> СТРОИТЕЛЬСТВО
ОФИСНЫХ ЗДАНИЙ</p>
    </div>
    <div className="bg-[#F7F7F7] p-[15%] text-center">
<img className="m-auto" src={icn1} alt="" />
<p className="text-[#000000] text-lg font-medium py-4"> СТРОИТЕЛЬСТВО
ОФИСНЫХ ЗДАНИЙ</p>
    </div>
    <div className="bg-[#F7F7F7] p-[15%] text-center">
<img className="m-auto" src={icn1} alt="" />
<p className="text-[#000000] text-lg font-medium py-4"> СТРОИТЕЛЬСТВО
ОФИСНЫХ ЗДАНИЙ</p>
    </div>
    <div className="bg-[#F7F7F7] p-[15%] text-center">
<img className="m-auto" src={icn1} alt="" />
<p className="text-[#000000] text-lg font-medium py-4"> СТРОИТЕЛЬСТВО
ОФИСНЫХ ЗДАНИЙ</p>
    </div>
    <div className="bg-[#F7F7F7] p-[15%] text-center">
<img className="m-auto" src={icn1} alt="" />
<p className="text-[#000000] text-lg font-medium py-4"> СТРОИТЕЛЬСТВО
ОФИСНЫХ ЗДАНИЙ</p>
    </div>
    <div className="bg-[#F7F7F7] p-[15%] text-center">
<img className="m-auto" src={icn1} alt="" />
<p className="text-[#000000] text-lg font-medium py-4"> СТРОИТЕЛЬСТВО
ОФИСНЫХ ЗДАНИЙ</p>
    </div>
  </div>
  </section>
  <section className="grid lg:grid-cols-4 md:grid-cols-2 md:mt-[10%] mt-[75%] lg:mt-0 justify-center">
<img src={img2} alt="" />
<img src={img2} alt="" />
<img src={img2} alt="" />
<img src={img2} alt="" />
<img src={img2} alt="" />
<img src={img2} alt="" />
<img src={img2} alt="" />
<img src={img2} alt="" />
  </section>
  <section className="py-[5%] w-[70%] m-auto">
  <h1 className="text-[#404149] font-semibold text-3xl text-center py-[5%]">ЧЕМ МЫ ЗАНИМАЕМСЯ?</h1>
  <div className="flex gap-3 py-4 ">
    <div className="self-center">
      <img src={icn2} alt="" />
    </div>
    <p className="font-medium text-[#F7654A]">РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
  </div>
  <div className="flex gap-3 py-4">
    <div className="self-center">
      <img src={icn2} alt="" />
    </div>
    <p className="font-medium text-[#F7654A]">РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
  </div>
  <p className="lg:w-[90%] text-[#999999]">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. </p>
  <div className="flex gap-3 py-4">
    <div className="self-center">
      <img src={icn2} alt="" />
    </div>
    <p className="font-medium text-[#F7654A]">РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
  </div>
  <div className="flex gap-3 py-4">
    <div className="self-center">
      <img src={icn2} alt="" />
    </div>
    <p className="font-medium text-[#F7654A]">РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
  </div>
  </section>



  <section className="bg-[#404149] px-[15%] py-[3%] ">
  <h1 className="text-white font-semibold text-3xl text-center pb-[3%]">наши партнеры</h1>
  <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-[4%]">
    <img src={logo2} alt="" />
    <img src={logo2} alt="" />
    <img src={logo2} alt="" />
    <img src={logo2} alt="" />
    <img src={logo2} alt="" />
  </div>
  </section>
  <section className="w-[70%] m-auto py-[5%]">
  <h1 className="text-[#404149] font-semibold text-3xl text-center py-[5%]">ЧЕМ МЫ ЗАНИМАЕМСЯ?</h1>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 items-center">
    <div className="py-2">
      <div className="p-[10%] bg-[#F7F7F7]">
        <h1 className="text-5xl text-[#F7654A] font-semibold">“</h1>
        <p className="text-[#999999] text-sm">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</p>
      </div>
      <h1 className="text-lg text-[#F7654A] font-semibold"><span className="text-lg text-[#000000] font-semibold" >Иванов Иван,</span> ООО “Газпром-Арена”</h1>
    </div>
    <div className="">
      <div className="p-[10%] bg-[#F7F7F7]">
        <h1 className="text-5xl text-[#F7654A] font-semibold">“</h1>
        <p className="text-[#999999] text-sm">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</p>
      </div>
      <h1 className="text-lg text-[#F7654A] font-semibold"><span className="text-lg text-[#000000] font-semibold" >Иванов Иван,</span> ООО “Газпром-Арена”</h1>
    </div>
    <div className="">
      <div className="p-[10%] bg-[#F7F7F7]">
        <h1 className="text-5xl text-[#F7654A] font-semibold">“</h1>
        <p className="text-[#999999] text-sm">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</p>
      </div>
      <h1 className="text-lg text-[#F7654A] font-semibold"><span className="text-lg text-[#000000] font-semibold" >Иванов Иван,</span> ООО “Газпром-Арена”</h1>
    </div>
  </div>
  </section>
  <section className="bg-[#F7654A] px-[15%] py-[4%]">
<div className="grid lg:grid-cols-[60%,40%] ">
  <div className="m-auto lg:m-0 ">
  <h1 className="text-white font-medium text-4xl">ХОТИТЕ С НАМИ РАБОТАТЬ?</h1>
  <p className="text-white font-normal text-xl py-2">ОСТАВЬТЕ ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ!</p>
  </div>
  <div className="">
    <div className="bg-white flex p-[4%] w-[50%] lg:ml-auto m-auto justify-between">
      <div className="self-center"><img className="w-full" src={email} alt="" /></div>
<p className="text-lg">ВАШ ЗАПРОС</p>
    </div>
  </div>
</div>
</section>
<section className="px-[15%] py-[4%]">
<h1 className="text-[#404149] font-semibold text-3xl text-center py-[5%]">КОНТАКТЫ</h1>
<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[5%] py-[5%]">
  <div className="text-center py-3">
<img className="m-auto" src={icn3} alt="" />
<p className="text-[#999999] text-md font-medium py-3">АДРЕС:</p>
<p className=" font-medium">НЕВСКИЙ ПРОСПЕКТ </p>
<p className=" font-medium">140,ОФИС 140-142</p>
  </div>
  <div className="text-center py-3">
<img className="m-auto" src={icn4} alt="" />
<p className="text-[#999999] text-md font-medium py-3">ТЕЛЕФОН:</p>
<p className=" font-medium">8 (812) 111-22-33
</p>
<p className=" font-medium">8 (812) 111-22-33</p>
  </div>
  <div className="text-center py-3">
<img className="m-auto" src={icn5} alt="" />
<p className="text-[#999999] text-md font-medium py-3">ВРЕМЯ РАБОТЫ:</p>
<p className=" font-medium">ПН-СБ</p>
<p className=" font-medium">10:00 - 20:00</p>
  </div>
  <div className="text-center py-3">
<img className="m-auto" src={icn6} alt="" />
<p className="text-[#999999]  font-medium py-3">E-MAIL:</p>
<p className=" font-medium text-[#F7654A]">INFO@VIP.RU</p>

  </div>
</div>
</section>
    </main>
    <footer className="px-[15%] py-[1%] flex justify-between bg-[#404149] lg:mt-0 md:mt-5 mt-11">
      <p className="text-sm text-[#999999]">© 2019 Строительная компания</p>
      <p className="text-sm text-[#999999] ">Разработано лучшей студей</p>

    </footer>
    </div>
  );
}

export default App;
