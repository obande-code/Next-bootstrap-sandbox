import Link from "next/link";
import styles from '../styles/Header.module.scss'
import { useState } from "react";
const Links = [
    {
        title: 'HOME',
        href: '#1',
    },
    {
        title: 'WORK',
        href: '#2',
    },
    {
        title: 'ABOUT',
        href: '#3',
    },
    {
        title: 'INSIGHT',
        href: '#4',
    },
    {
        title: 'CONTACT',
        href: '#5',
    },
    {
        title: 'DEVICE SCHEME',
        href: '#6',
    }
]

const Header = () => {
    const [navnum, setNavnum] = useState(0);
    return (
        <>
            <div className={"d-flex justify-content-end me-4 mt-3 " + `${styles.rotate} `+ `${styles.mix}`}>
                {
                    Links.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={"border-secondary " + `${styles.landscape} ` + `${styles.borderbottom}`}></div>
                                <div className={"d-flex flex-column position-relative " + (index == 0 ? "me-5" : index == 5 ? "ms-5" : "mx-5")} key={index}>
                                    <div className="d-flex flex-column align-items-center">
                                        <a className="text-dark mb-2 mt-3" href={item.href} onClick={() => setNavnum(index)}><pre className={styles.pre}>{item.title}</pre></a>
                                        <div className={"position-absolute " + `${styles.bottomzero}`}>
                                            <div className="position-relative">
                                                {

                                                    index === navnum ? <div className={"position-absolute " + `${styles.bround}`}></div> : <div className={"position-absolute "+ `${styles.round}`}></div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {(index == 0 || index == 5) &&
                                        <div className={"position-absolute " + `${styles.bottomzero} ` + (index == 0 ? "start-0" : "end-0")}>
                                            <div className="position-relative">
                                                <div className={"position-absolute " + `${styles.vline}`}></div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                {/* <div className={"border-secondary "+ `${styles.mobile} ` + `${styles.borderbottom}`}></div> */}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Header;