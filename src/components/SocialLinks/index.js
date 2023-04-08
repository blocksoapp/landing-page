import classes from './SocialLinks.module.scss';
import discord from '../../assets/img/discord.svg';
import twitter from '../../assets/img/twitter.svg';
import telegram from '../../assets/img/telegram.svg';
import notion from '../../assets/img/notion.svg';

function SocialLinks() {
    return (
        <div className={classes.socialLinks}>
            <a href='https://discord.gg/wT7HrqqDq4' target="_blank">
                <img src={discord} alt='discord' />
            </a>
            <a href='https://twitter.com/blockso_app' target="_blank">
                <img src={twitter} alt='twitter' />
            </a>
            <a href='https://t.me/blockso_app' target="_blank">
                <img src={telegram} alt='telegram' />
            </a>
            <a href='https://blockso.notion.site/Blockso-s-Mission-a5575e5840124eabad25e9554c5ae9a2' target="_blank">
                <img src={notion} alt='notion' />
            </a>
        </div>
    )
}

export default SocialLinks;
