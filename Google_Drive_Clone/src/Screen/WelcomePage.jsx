import style from './WelcomePage.module.css';
const WelcomePage = ({ singnIn }) => {

    return (
        <>
            <div className={style.login}>
                <div className={style.header}><img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="logo" />
                    <h2>Google Drive</h2>
                </div>
                <div className={style.loginBox}>
                    <div className={style.content}>
                        <h1>Easy and secure access to your content</h1>
                        <p>Store, share, and collaborate on files and folders from your mobile device, tablet, or computer

                        </p>
                        <button className={style.button} onClick={singnIn}><img src="https://imgs.search.brave.com/j0DBe1cS0-Wa6lVhWSzTeSw8ztf_c37095yc-NBkhdQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmdvb2ds/ZS5jb20vc3RhdGlj/L2lkZW50aXR5L2lt/YWdlcy9icmFuZGlu/Z19ndWlkZWxpbmVf/c2FtcGxlX2x0X3Nx/X2xnLnN2Zw.svg" alt="" /></button>
                    </div>
                    <div className={style.imgBox}>
                        <img src="https://gdisk.vercel.app/landing-splash.jpg" alt="img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomePage