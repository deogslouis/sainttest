"use client";
import styles from "./page.module.css";
import { sanarae } from "../data";
import { GotoHome } from "../components";
import { useRouter } from "next/navigation";

export default function SedTua() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <GotoHome />
      </div>
      <div className={styles.whatIsSedtua}>
        <div className={styles.WhatIsSedtuaLat}>
          <span>Quid est </span>
          <span>
            <span className={styles.sedtua}>SED-TUA</span>
            <span>?</span>
          </span>
        </div>
        <div className={styles.WhatIsSedtuaKr}>SED-TUA 무엇인가요?</div>
      </div>
      <div className={styles.sedtuaDescription}>
        🙏 [SED-TUA란?] <br />
        SED-TUA는 “그러나 제 뜻이 아니라 아버지의 뜻이 이루어지게 하십시오.”(루카 22,42)에서 이름을 빌려 온 한국기술교육대학교 유일 가톨릭 동아리입니다. 
        명례방, 영신수련, 주일미사, 대가대협활동과 교회력에 맞는 비정기적인 활동을 하고 있습니다.? <br />{" "}
        <br />
        🌈 [사나래의 다양한 활동] <br />
        학교에서 매 학기 시작과 마지막을 개강미사, 종강미사와 함께 시작하고 맺을
        수 있으며 축일축하, 여행, 피정 등 다양한
        성당과 동방에서 재미있는 시간을 보내기도
        하며 행복을 나눕니다!
      </div>
    </div>
  );
}
