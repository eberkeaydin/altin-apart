import { mutfak } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={mutfak} alt="billing" className="w-[85%] h-[120%] relative z-[5] rounded-lg" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[75%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Konaklama endişelerinizi 
         <br className="sm:block hidden" /> 
          bir kenara bırakabilirsiniz
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Hiçbir abonelik ve sözleşme iş yükü ile zaman kaybetmeden yalnızca bavulunuz ile Altın Apart'a gelip kaydınızı yapabilirsiniz.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Şiran Altın Apart tüm misafirler için geçerli genel hizmetleri ve özel apart paketi hizmetleri ile keyifli bir konaklama deneyimi sunmayı misyonu kabul eder.  
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
);

export default Billing;
