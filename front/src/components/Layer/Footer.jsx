import logo from 'src/assets/Logo.png'


const Footer = () => {
    return (

        <footer className="relative mt-auto">
            <div className="bg-primary lg:bg-[var(--primary)] bg-texture pb-24 "
            style={{":before":""}}
            >

                <div className="flex w-full justify-center translate-y-[-50%] relative z-[200]">
                    <a classname=""  href="#">
                        <img className="w-[136px] md:w-[206px] "  src={logo} alt="" />
                    </a>
                </div>

                <div className="cont ">
                    <div className="relative flex justify-center">
                        <div className="scale-125">
                            <h4 className="text-center">SEGUINOS</h4>

                            <div className="flex gap-9 items-center mt-8 ">
                                <a href="https://www.facebook.com/UPISAFrigorificoPY" target="_blank">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
                                            fill="white" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/upisa_frigorifico/" target="_blank">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88204 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52227 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52227 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z"
                                            fill="white" />
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/@upisafrigorifico2100" target="_blank">
                                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.4996 3.50708C23.3638 3.02231 23.099 2.58342 22.7336 2.23708C22.3579 1.88008 21.8974 1.62471 21.3956 1.49508C19.5176 1.00008 11.9936 1.00008 11.9936 1.00008C8.85697 0.964389 5.72107 1.12135 2.60364 1.47008C2.10183 1.60929 1.6422 1.87036 1.26564 2.23008C0.895641 2.58608 0.627641 3.02508 0.487641 3.50608C0.151334 5.31782 -0.0120674 7.15742 -0.000359379 9.00008C-0.0123594 10.8411 0.150641 12.6801 0.487641 14.4941C0.624641 14.9731 0.891641 15.4101 1.26264 15.7631C1.63364 16.1161 2.09564 16.3711 2.60364 16.5061C4.50664 17.0001 11.9936 17.0001 11.9936 17.0001C15.1343 17.0358 18.2742 16.8788 21.3956 16.5301C21.8974 16.4004 22.3579 16.1451 22.7336 15.7881C23.0989 15.4418 23.3633 15.0029 23.4986 14.5181C23.8437 12.707 24.0115 10.8667 23.9996 9.02308C24.0256 7.17168 23.858 5.32264 23.4996 3.50608V3.50708ZM9.60164 12.4241V5.57708L15.8616 9.00108L9.60164 12.4241Z"
                                            fill="white" />
                                    </svg>
                                </a>

                            </div>

                        </div>



                    </div>
                </div>


            </div>


            <div className="flex flex-col md:flex-row text-white
             [&>span]:py-8 
             [&>span]:flex
             [&>span]:justify-center
            ">

                <span className="bg-[var(--success)] w-full text-center">
                    <p>
                        © 2022 Frigorífico UPISA. <br className="md:hidden" />
                        Todos los derechos reservados.
                    </p>
                </span>
                    <a  className="bg-[#4688C3] hover:bg-[#3c6e9b] group
                    w-full flex justify-center items-center transition-all ease-out delay-100 duration-500 " 
                    
                    target="_blank" href="https://arsisteam.com/">
                        <p className=''>
                            Desarrollado por Arsis
                        </p>
                    </a>
            </div>
        </footer>
    )
}

export default Footer