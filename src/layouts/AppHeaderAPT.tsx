
import { Box, Button, Link, MenuItem } from '@material-ui/core'; 
import AptinLogo from "../icons/aptin.png";
import AptinLogo_w from "../icons/aptin-w.png";
import BridgeWidgetMenu from './BridgeWidgetMenu';
import { ComingSoon } from './Comingsoon';

interface HeaderProps {
    modeName: string;
    setModeName: (value: string) => void;
}

export const AppHeaderAPT = ({ modeName, setModeName }: HeaderProps) => {

    const fillColor = modeName == "dark" ? '#F1F1F3' : '#6A7888';

    return (
        <>
            <div className='aptin-logo'>
                <img src={modeName == 'light' ? AptinLogo : AptinLogo_w} alt="aptin logo" />

            </div>

            <Box className='left-menu-box'>

                <ul className="muiList-root">

                    <li className={"menu-item menudashboard"} data-cy="menuDashboard">

                        <Button
                            component={Link}
                            href={'https://app.aptin.io/'}
                        >
                            <span className='ico-svg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="none">
                                    <path d="M6.41732 2.33398V4.66732C6.41732 5.13145 6.23294 5.57657 5.90476 5.90476C5.57657 6.23294 5.13145 6.41732 4.66732 6.41732H2.33398C1.86986 6.41732 1.42474 6.23294 1.09655 5.90476C0.768359 5.57657 0.583984 5.13145 0.583984 4.66732V2.33398C0.583984 1.86986 0.768359 1.42474 1.09655 1.09655C1.42474 0.768359 1.86986 0.583984 2.33398 0.583984H4.66732C5.13145 0.583984 5.57657 0.768359 5.90476 1.09655C6.23294 1.42474 6.41732 1.86986 6.41732 2.33398ZM11.6673 0.583984H9.33398C8.86986 0.583984 8.42474 0.768359 8.09655 1.09655C7.76836 1.42474 7.58398 1.86986 7.58398 2.33398V4.66732C7.58398 5.13145 7.76836 5.57657 8.09655 5.90476C8.42474 6.23294 8.86986 6.41732 9.33398 6.41732H11.6673C12.1314 6.41732 12.5766 6.23294 12.9048 5.90476C13.2329 5.57657 13.4173 5.13145 13.4173 4.66732V2.33398C13.4173 1.86986 13.2329 1.42474 12.9048 1.09655C12.5766 0.768359 12.1314 0.583984 11.6673 0.583984V0.583984ZM4.66732 7.58398H2.33398C1.86986 7.58398 1.42474 7.76836 1.09655 8.09655C0.768359 8.42474 0.583984 8.86986 0.583984 9.33398V11.6673C0.583984 12.1314 0.768359 12.5766 1.09655 12.9048C1.42474 13.2329 1.86986 13.4173 2.33398 13.4173H4.66732C5.13145 13.4173 5.57657 13.2329 5.90476 12.9048C6.23294 12.5766 6.41732 12.1314 6.41732 11.6673V9.33398C6.41732 8.86986 6.23294 8.42474 5.90476 8.09655C5.57657 7.76836 5.13145 7.58398 4.66732 7.58398ZM11.6673 7.58398H9.33398C8.86986 7.58398 8.42474 7.76836 8.09655 8.09655C7.76836 8.42474 7.58398 8.86986 7.58398 9.33398V11.6673C7.58398 12.1314 7.76836 12.5766 8.09655 12.9048C8.42474 13.2329 8.86986 13.4173 9.33398 13.4173H11.6673C12.1314 13.4173 12.5766 13.2329 12.9048 12.9048C13.2329 12.5766 13.4173 12.1314 13.4173 11.6673V9.33398C13.4173 8.86986 13.2329 8.42474 12.9048 8.09655C12.5766 7.76836 12.1314 7.58398 11.6673 7.58398Z"
                                        fill={fillColor} />
                                </svg>
                            </span>
                            <span className='nav-i'>Dashboard</span>
                        </Button>
                    </li>
                    <li className={"menu-item menuMarkets"} data-cy="menuMarkets">
                        <Button
                            component={Link}
                            href={'https://app.aptin.io/markets/'}
                        >
                            <span className='ico-svg'>
                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_360_15703)">
                                        <path d="M4.08398 7.58398V12.834C4.08398 12.9887 4.02253 13.1371 3.91313 13.2465C3.80373 13.3559 3.65536 13.4173 3.50065 13.4173H1.16732C1.01261 13.4173 0.864235 13.3559 0.754839 13.2465C0.645443 13.1371 0.583984 12.9887 0.583984 12.834V7.58398C0.583984 7.42928 0.645443 7.2809 0.754839 7.17151C0.864235 7.06211 1.01261 7.00065 1.16732 7.00065H3.50065C3.65536 7.00065 3.80373 7.06211 3.91313 7.17151C4.02253 7.2809 4.08398 7.42928 4.08398 7.58398ZM8.16732 0.583984H5.83398C5.67928 0.583984 5.5309 0.645443 5.42151 0.754839C5.31211 0.864235 5.25065 1.01261 5.25065 1.16732V12.834C5.25065 12.9887 5.31211 13.1371 5.42151 13.2465C5.5309 13.3559 5.67928 13.4173 5.83398 13.4173H8.16732C8.32203 13.4173 8.4704 13.3559 8.5798 13.2465C8.68919 13.1371 8.75065 12.9887 8.75065 12.834V1.16732C8.75065 1.01261 8.68919 0.864235 8.5798 0.754839C8.4704 0.645443 8.32203 0.583984 8.16732 0.583984ZM12.834 3.50065H10.5007C10.3459 3.50065 10.1976 3.56211 10.0882 3.67151C9.97878 3.7809 9.91732 3.92928 9.91732 4.08398V12.834C9.91732 12.9887 9.97878 13.1371 10.0882 13.2465C10.1976 13.3559 10.3459 13.4173 10.5007 13.4173H12.834C12.9887 13.4173 13.1371 13.3559 13.2465 13.2465C13.3559 13.1371 13.4173 12.9887 13.4173 12.834V4.08398C13.4173 3.92928 13.3559 3.7809 13.2465 3.67151C13.1371 3.56211 12.9887 3.50065 12.834 3.50065Z"
                                            fill={fillColor} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_360_15703">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span className='nav-i'>Markets</span>
                        </Button>
                    </li>
                    <li className={"menu-item menustake"} data-cy="menustake">

                        <Button
                            component={Link}
                            href={'https://app.aptin.io/staking/'}
                        >
                            <span className='ico-svg'>

                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.125 7C13.125 9.05056 11.4568 10.7188 9.40625 10.7188H8.75V11.9376C8.75 12.2146 8.41531 12.3528 8.21975 12.1573L6.125 10.0625L8.21975 7.96775C8.41531 7.77219 8.75 7.91088 8.75 8.18738V9.40625H9.40625C10.7327 9.40625 11.8125 8.32694 11.8125 7C11.8125 5.67306 10.7327 4.59375 9.40625 4.59375C9.044 4.59375 8.75 4.30019 8.75 3.9375C8.75 3.57481 9.044 3.28125 9.40625 3.28125C11.4568 3.28125 13.125 4.94944 13.125 7Z" fill={fillColor} />
                                    <path d="M7.875 3.9383L5.78025 6.03305C5.58469 6.22861 5.25 6.08992 5.25 5.81343V4.59455H4.59375C3.26725 4.59455 2.1875 5.67386 2.1875 7.0008C2.1875 8.32774 3.26725 9.40705 4.59375 9.40705C4.956 9.40705 5.25 9.70061 5.25 10.0633C5.25 10.426 4.956 10.7196 4.59375 10.7196C2.54319 10.7196 0.875 9.05136 0.875 7.0008C0.875 4.95024 2.54319 3.28205 4.59375 3.28205H5.25V2.06317C5.25 1.78624 5.58469 1.64799 5.78025 1.84355L7.875 3.9383Z" fill={fillColor} />
                                </svg>

                            </span>
                            <span className='nav-i'>Stake</span>
                        </Button>

                    </li>
                  
                    <li className={"menu-item menuswap"} data-cy="menuswap">

                        <Button
                            component={Link}
                            href={'https://app.aptin.io/swap/'}
                        >
                            <span className='ico-svg'>

                                <svg width="12" height="12" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3193" ><path d="M959.829333 618.666667H32a10.666667 10.666667 0 0 0-10.666667 10.666666v80.042667c0 5.802667 4.778667 10.581333 10.666667 10.581333h806.912l-192.341333 244.053334a10.752 10.752 0 0 0 8.362666 17.322666h96.682667a21.333333 21.333333 0 0 0 16.810667-8.106666l225.024-285.525334a42.666667 42.666667 0 0 0-33.621334-69.034666z m32.170667-314.709334H185.088L377.429333 60.074667A10.752 10.752 0 0 0 369.066667 42.666667H272.384a21.333333 21.333333 0 0 0-16.810667 8.106666L30.549333 336.298667a42.666667 42.666667 0 0 0 33.450667 69.034666h928a10.666667 10.666667 0 0 0 10.666667-10.666666v-80.042667a10.666667 10.666667 0 0 0-10.666667-10.581333z"
                                    fill={fillColor} p-id="3194"></path></svg>

                            </span>
                            <span className='nav-i'>Swap</span>
                        </Button>

                    </li>
                    <li className={"menu-item menugovernance"} data-cy="menugovernance">
                        <ComingSoon menuName={'Governance'} modeName={modeName} />
                    </li>
                    <li className={"menu-item on menubridge"} data-cy="menubridge">
                        <BridgeWidgetMenu modeName={modeName} />
                    </li>
                </ul>
            </Box>

            <div className='aptin-footer-box-left'>
                {/* <MoreMenu /> */}
                {
                    modeName === 'dark' ?
                        <>
                            <MenuItem component={Link} href={'https://discord.com/invite/fMVkQNumzb'}>


                                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_406_16378)">
                                        <rect width="40" height="40" rx="20" fill="white" fill-opacity="0.1" />
                                        <path d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32Z" fill="white" />
                                        <path d="M15.79 24.598H22.9189L22.5779 23.4927L23.3926 24.1922L24.1395 24.8601L25.4989 25.9969V15.238C25.4765 14.9023 25.3274 14.5877 25.0817 14.3579C24.836 14.1281 24.5122 14.0002 24.1758 14.0001H15.7916C15.457 13.9958 15.1341 14.1232 14.8925 14.3547C14.6509 14.5863 14.5099 14.9035 14.5 15.238V23.3601C14.5016 23.5266 14.5364 23.6912 14.6025 23.844C14.6685 23.9969 14.7645 24.1351 14.8846 24.2504C15.0048 24.3657 15.1468 24.4558 15.3022 24.5155C15.4577 24.5752 15.6235 24.6033 15.79 24.598ZM21.0637 16.8422H21.0463H21.0637ZM17.2474 17.4738C17.7567 17.0854 18.3741 16.8647 19.0142 16.8422L19.0821 16.9101C17.9611 17.1769 17.4526 17.6791 17.4526 17.6791C17.4526 17.6791 17.5884 17.6127 17.8253 17.5101C18.5762 17.2094 19.3826 17.0718 20.1908 17.1064C20.999 17.141 21.7906 17.3469 22.5132 17.7106C22.5132 17.7106 22.0032 17.2369 20.9516 16.9417L21.0447 16.8501C21.6747 16.8776 22.2811 17.0981 22.7816 17.4817C23.3635 18.5618 23.6796 19.765 23.7037 20.9917C23.6753 20.9475 23.1337 21.8238 21.7363 21.8538C21.7363 21.8538 21.5011 21.5854 21.3321 21.3533C22.1484 21.1196 22.4532 20.6506 22.4532 20.6506C22.223 20.7863 21.9859 20.9096 21.7426 21.0201C21.4481 21.1394 21.1424 21.2288 20.83 21.2869C19.3868 21.5206 18.5784 21.1291 17.8126 20.8133L17.5521 20.6791C17.5521 20.6791 17.8553 21.1527 18.6384 21.3817C18.4363 21.6233 18.2326 21.8948 18.2326 21.8948C16.84 21.8617 16.3379 20.9917 16.3379 20.9917C16.3575 19.7635 16.6692 18.5576 17.2474 17.4738Z" fill="#181C21" />
                                        <path d="M21.1542 20.3842C21.3259 20.3759 21.4879 20.3018 21.6065 20.1773C21.725 20.0528 21.7912 19.8875 21.7912 19.7156C21.7912 19.5436 21.725 19.3783 21.6065 19.2538C21.4879 19.1293 21.3259 19.0552 21.1542 19.0469C20.9771 19.0469 20.8072 19.1172 20.6819 19.2425C20.5567 19.3678 20.4863 19.5376 20.4863 19.7148C20.4863 19.8919 20.5567 20.0618 20.6819 20.187C20.8072 20.3123 20.9771 20.3827 21.1542 20.3827V20.3842Z" fill="#181C21" />
                                        <path d="M18.8456 20.3842C19.0174 20.3759 19.1793 20.3018 19.2979 20.1773C19.4165 20.0528 19.4826 19.8875 19.4826 19.7156C19.4826 19.5436 19.4165 19.3783 19.2979 19.2538C19.1793 19.1293 19.0174 19.0552 18.8456 19.0469C18.6685 19.0469 18.4986 19.1172 18.3734 19.2425C18.2481 19.3678 18.1777 19.5376 18.1777 19.7148C18.1777 19.8919 18.2481 20.0618 18.3734 20.187C18.4986 20.3123 18.6685 20.3827 18.8456 20.3827V20.3842Z" fill="#181C21" />
                                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#252C38" strokeOpacity="0.1" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_406_16378" x="-224" y="-224" width="488" height="488" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="112" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_406_16378" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_406_16378" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                            </MenuItem>
                            <MenuItem component={Link} href={'https://t.me/aptinlabs'}>


                                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_406_16386)">
                                        <rect width="40" height="40" rx="20" fill="white" fill-opacity="0.1" />
                                        <g clipPath="url(#clip0_406_16386)">
                                            <path d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32Z" fill="white" />
                                            <path d="M13.4903 19.7383L25.0603 15.2773C25.5973 15.0833 26.0663 15.4083 25.8923 16.2203L25.8933 16.2193L23.9233 25.5003C23.7773 26.1583 23.3863 26.3183 22.8393 26.0083L19.8393 23.7973L18.3923 25.1913C18.2323 25.3513 18.0973 25.4863 17.7873 25.4863L18.0003 22.4333L23.5603 17.4103C23.8023 17.1973 23.5063 17.0773 23.1873 17.2893L16.3163 21.6153L13.3543 20.6913C12.7113 20.4873 12.6973 20.0483 13.4903 19.7383Z" fill="#181C21" />
                                        </g>
                                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#252C38" strokeOpacity="0.1" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_406_16386" x="-224" y="-224" width="488" height="488" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="112" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_406_16386" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_406_16386" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_406_16386">
                                            <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </MenuItem>
                            <MenuItem component={Link} href={'https://twitter.com/aptinlabs'}>



                                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_406_16390)">
                                        <rect width="40" height="40" rx="20" fill="white" fill-opacity="0.1" />
                                        <path d="M19.9999 31.9998C26.6273 31.9998 31.9998 26.6273 31.9998 19.9999C31.9998 13.3725 26.6273 8 19.9999 8C13.3725 8 8 13.3725 8 19.9999C8 26.6273 13.3725 31.9998 19.9999 31.9998Z" fill="white" />
                                        <path d="M27.3498 16.6224C26.8356 16.8504 26.2824 17.0047 25.7023 17.0735C26.2946 16.7187 26.7492 16.1572 26.9637 15.487C26.4095 15.8158 25.7954 16.0543 25.1423 16.1828C24.6191 15.6256 23.8736 15.2773 23.0481 15.2773C21.4643 15.2773 20.1798 16.5619 20.1798 18.1457C20.1798 18.3705 20.2053 18.5893 20.2545 18.7994C17.8707 18.6798 15.757 17.5379 14.3422 15.8021C14.0954 16.2256 13.9538 16.7187 13.9538 17.2442C13.9538 18.2391 14.4605 19.1174 15.2297 19.6317C14.7598 19.6169 14.3172 19.4879 13.9307 19.2725C13.9304 19.2847 13.9304 19.2969 13.9304 19.3089C13.9304 20.6987 14.9196 21.8578 16.2315 22.1212C15.991 22.187 15.7371 22.2219 15.4759 22.2219C15.2907 22.2219 15.1112 22.2042 14.9362 22.1708C15.3012 23.3101 16.3602 24.1394 17.6157 24.1627C16.6338 24.9321 15.3972 25.3906 14.053 25.3906C13.822 25.3906 13.5931 25.3771 13.3691 25.3503C14.6378 26.1645 16.1459 26.6391 17.7656 26.6391C23.0415 26.6391 25.9267 22.2685 25.9267 18.4779C25.9267 18.3536 25.9239 18.2297 25.9184 18.1069C26.4792 17.7026 26.9654 17.1976 27.3498 16.6224Z" fill="#181C21" />
                                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#252C38" strokeOpacity="0.1" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_406_16390" x="-224" y="-224" width="488" height="488" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="112" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_406_16390" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_406_16390" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                            </MenuItem>
                        </>
                        :
                        <>
                            <MenuItem component={Link} href={'https://discord.com/invite/fMVkQNumzb'}>

                                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="20" fill="white" />
                                    <path d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32Z" fill="#181C21" />
                                    <path d="M15.79 24.598H22.9189L22.5779 23.4927L23.3926 24.1922L24.1395 24.8601L25.4989 25.9969V15.238C25.4765 14.9023 25.3274 14.5877 25.0817 14.3579C24.836 14.1281 24.5122 14.0002 24.1758 14.0001H15.7916C15.457 13.9958 15.1341 14.1232 14.8925 14.3547C14.6509 14.5863 14.5099 14.9035 14.5 15.238V23.3601C14.5016 23.5266 14.5364 23.6912 14.6025 23.844C14.6685 23.9969 14.7645 24.1351 14.8846 24.2504C15.0048 24.3657 15.1468 24.4558 15.3022 24.5155C15.4577 24.5752 15.6235 24.6033 15.79 24.598ZM21.0637 16.8422H21.0463H21.0637ZM17.2474 17.4738C17.7567 17.0854 18.3741 16.8647 19.0142 16.8422L19.0821 16.9101C17.9611 17.1769 17.4526 17.6791 17.4526 17.6791C17.4526 17.6791 17.5884 17.6127 17.8253 17.5101C18.5762 17.2094 19.3826 17.0718 20.1908 17.1064C20.999 17.141 21.7906 17.3469 22.5132 17.7106C22.5132 17.7106 22.0032 17.2369 20.9516 16.9417L21.0447 16.8501C21.6747 16.8776 22.2811 17.0981 22.7816 17.4817C23.3635 18.5618 23.6796 19.765 23.7037 20.9917C23.6753 20.9475 23.1337 21.8238 21.7363 21.8538C21.7363 21.8538 21.5011 21.5854 21.3321 21.3533C22.1484 21.1196 22.4532 20.6506 22.4532 20.6506C22.223 20.7863 21.9859 20.9096 21.7426 21.0201C21.4481 21.1394 21.1424 21.2288 20.83 21.2869C19.3868 21.5206 18.5784 21.1291 17.8126 20.8133L17.5521 20.6791C17.5521 20.6791 17.8553 21.1527 18.6384 21.3817C18.4363 21.6233 18.2326 21.8948 18.2326 21.8948C16.84 21.8617 16.3379 20.9917 16.3379 20.9917C16.3575 19.7635 16.6692 18.5576 17.2474 17.4738Z" fill="white" />
                                    <path d="M21.1542 20.3862C21.3259 20.3778 21.4879 20.3038 21.6065 20.1793C21.725 20.0548 21.7912 19.8894 21.7912 19.7175C21.7912 19.5456 21.725 19.3802 21.6065 19.2558C21.4879 19.1313 21.3259 19.0572 21.1542 19.0488C20.9771 19.0488 20.8072 19.1192 20.6819 19.2444C20.5567 19.3697 20.4863 19.5396 20.4863 19.7167C20.4863 19.8939 20.5567 20.0637 20.6819 20.189C20.8072 20.3143 20.9771 20.3846 21.1542 20.3846V20.3862Z" fill="white" />
                                    <path d="M18.8456 20.3862C19.0174 20.3778 19.1793 20.3038 19.2979 20.1793C19.4165 20.0548 19.4826 19.8894 19.4826 19.7175C19.4826 19.5456 19.4165 19.3802 19.2979 19.2558C19.1793 19.1313 19.0174 19.0572 18.8456 19.0488C18.6685 19.0488 18.4986 19.1192 18.3734 19.2444C18.2481 19.3697 18.1777 19.5396 18.1777 19.7167C18.1777 19.8939 18.2481 20.0637 18.3734 20.189C18.4986 20.3143 18.6685 20.3846 18.8456 20.3846V20.3862Z" fill="white" />
                                </svg>


                            </MenuItem>
                            <MenuItem component={Link} href={'https://t.me/aptinlabs'}>

                                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="20" fill="white" />
                                    <g clipPath="url(#clip0_406_16327)">
                                        <path d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32Z" fill="#181C21" />
                                        <path d="M13.4903 19.7402L25.0603 15.2792C25.5973 15.0852 26.0663 15.4102 25.8923 16.2222L25.8933 16.2212L23.9233 25.5022C23.7773 26.1602 23.3863 26.3202 22.8393 26.0102L19.8393 23.7992L18.3923 25.1932C18.2323 25.3532 18.0973 25.4882 17.7873 25.4882L18.0003 22.4352L23.5603 17.4122C23.8023 17.1992 23.5063 17.0792 23.1873 17.2912L16.3163 21.6172L13.3543 20.6932C12.7113 20.4892 12.6973 20.0502 13.4903 19.7402Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_406_16327">
                                            <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                                        </clipPath>
                                    </defs>
                                </svg>



                            </MenuItem>
                            <MenuItem component={Link} href={'https://twitter.com/aptinlabs'}>

                                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="40" height="40" rx="20" fill="white" />
                                    <path d="M19.9999 31.9998C26.6273 31.9998 31.9998 26.6273 31.9998 19.9999C31.9998 13.3725 26.6273 8 19.9999 8C13.3725 8 8 13.3725 8 19.9999C8 26.6273 13.3725 31.9998 19.9999 31.9998Z" fill="#181C21" />
                                    <path d="M27.3498 16.6244C26.8356 16.8524 26.2824 17.0066 25.7023 17.0755C26.2946 16.7206 26.7492 16.1591 26.9637 15.4889C26.4095 15.8177 25.7954 16.0562 25.1423 16.1848C24.6191 15.6275 23.8736 15.2793 23.0481 15.2793C21.4643 15.2793 20.1798 16.5638 20.1798 18.1476C20.1798 18.3724 20.2053 18.5913 20.2545 18.8013C17.8707 18.6817 15.757 17.5399 14.3422 15.804C14.0954 16.2276 13.9538 16.7206 13.9538 17.2462C13.9538 18.2411 14.4605 19.1194 15.2297 19.6336C14.7598 19.6189 14.3172 19.4899 13.9307 19.2745C13.9304 19.2867 13.9304 19.2989 13.9304 19.3108C13.9304 20.7006 14.9196 21.8598 16.2315 22.1231C15.991 22.189 15.7371 22.2239 15.4759 22.2239C15.2907 22.2239 15.1112 22.2061 14.9362 22.1727C15.3012 23.312 16.3602 24.1414 17.6157 24.1647C16.6338 24.9341 15.3972 25.3925 14.053 25.3925C13.822 25.3925 13.5931 25.379 13.3691 25.3523C14.6378 26.1664 16.1459 26.6411 17.7656 26.6411C23.0415 26.6411 25.9267 22.2705 25.9267 18.4798C25.9267 18.3555 25.9239 18.2317 25.9184 18.1089C26.4792 17.7046 26.9654 17.1996 27.3498 16.6244Z" fill="#F1F2F2" />
                                </svg>


                            </MenuItem>
                        </>
                }



            </div>

        </>
    );
}
