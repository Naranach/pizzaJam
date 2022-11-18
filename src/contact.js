const renderContactPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML = `
      <div class="topic">
      <h1>Bize Ulaşın</h1>
    </div>
    <div class="contact-container">
    <div class="info">
    <div class="address">
        <span> <i class="fi-xnsuxl-map-marker-solid"></i></span>
        <p>Referans Başakşehir Vadi Konutları 5. Etap Referans Vadi Kat: -1 No: 69 Başakşehir/İstanbul/İstanbul</p>
    </div>
    <div class="hours">
        <span><i class="fi-cnsuhl-clock-solid"></i></span>
        <p>Haftanın her günü 11:30 - 02:00 Arasında Hizmete Açığız.</p>
    </div>
        <div class="phone">
          <p><i class="fi-xnsrxl-phone-solid"></i>(212)-843 8262</p>
        </div>
        <div class="contact-form">
          <form onsubmit="return false">
            <h3><i class="fi-xwsuxl-envelope-solid"></i>Bize Ulaşın</h3>
            <div class="input-box">
              <input type="text" required />
              <span>İsim</span>
            </div>
            <div class="input-box">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div class="input-box">
              <textarea required></textarea>
              <span>Görüşleriniz Bizim İçin Değerli</span>
            </div>
            <input type="submit" value="Gönder" />
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.812527411898!2d28.802069485950945!3d41.11066773647367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b31b23b4230bedc!2sPizza%20Jam%20Cafe!5e0!3m2!1str!2str!4v1668756813198!5m2!1str!2str"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>`;
  
    contentContainer.appendChild(contact);
  })();
  
  export { renderContactPage };