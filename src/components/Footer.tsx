import { Link, makeStyles, Typography } from "@material-ui/core";


export default function Footer() {

  return (
    <footer className={'footer'}>  
        <Link
            href="https://docs.wormholenetwork.com/wormhole/faqs"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            className={'wormhole-link'}
          >
            FAQ
          </Link>
          <Link
            href="https://wormholenetwork.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            className={'wormhole-link'}
          >
            Wormhole
          </Link>
     
    </footer>
  );
}
