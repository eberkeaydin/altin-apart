import { salon } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Yaşam Alanımız <br className="sm:block hidden" />
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        • Her apartın faydalanacağı: oturma alanı, TV, Internet, çamaşır makinesi, buzdolabı, ocak, doğalgaz(kombi), balkon ve kapıcı hizmeti ile evinde hisset.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        • Amazon Prime, Netflix, Youtube Premium ve beIN Connect ile izlence dünyasından geri kalma.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        • Bina içerisinde bulunan etkinlik dairesindeki aletleri kullanarak spor yapabilmen mümkün.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        • Oyunseverlere müjde! Playstation 5 kiralama hizmetinden faydalanabilirsiniz.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        • Fotokopi ihtiyaçların için kırtasiyeye gitmene hiç gerek yok.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={salon} alt="billing" className="w-[75%] h-[75%] rounded-lg" />
    </div>
  </section>
);

export default CardDeal;
