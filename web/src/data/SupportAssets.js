import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PaidIcon from '@mui/icons-material/Paid';
import TerminalIcon from '@mui/icons-material/Terminal';
import TollIcon from '@mui/icons-material/Toll';

const Accordion_list = [
  {
    title: "Account Opening",
    content: [
      { label: "Resident Individual", href: "#" },
      { label: "Minor", href: "#" },
      { label: "Non Resident Indian (NRI)", href: "#" },
      { label: "Glossary", href: "#" }
    ],
    emoji: AccountBalanceIcon,
  },
  {
    title: "Your Zerodha Account",
    content: [
      { label: "Your Profile", href: "#" },
      { label: "Account modification", href: "#" },
      { label: "Client Master Report (CMR) and Depository Participant (DP)", href: "#" },
      { label: "Nomination", href: "#" },
      { label: "Transfer and conversion of securities", href: "#" }
    ],
    emoji: AccountCircleIcon,
  },
  {
    title: "Kite",
    content: [
      { label: "IPOs", href: "#" },
      { label: "Trading FAQs", href: "#" },
      { label: "Margin Trading Facility (MTF) and Margins", href: "#" },
      { label: "Charts and orders", href: "#" }
    ],
    emoji: BookmarkBorderIcon,
  },
  {
    title: "Funds",
    content: [
      { label: "Add money", href: "#" },
      { label: "Withdraw money", href: "#" },
      { label: "Add bank accounts", href: "#" },
      { label: "eMandates", href: "#" }
    ],
    emoji: PaidIcon,
  },
  {
    title: "Console",
    content: [
      { label: "Portfolio", href: "#" },
      { label: "Reports", href: "#" },
      { label: "Taxation", href: "#" }
    ],
    emoji: TerminalIcon,
  },
  {
    title: "Coin",
    content: [
      { label: "Mutual Funds", href: "#" },
      { label: "Buying and Selling", href: "#" }
    ],
    emoji: TollIcon,
  },
];

const NoticeBoard = [
  { title: "Commodities option contract expiry - June 2026", href: "#" },
  { title: "Electricity contract expiry - June 2026", href: "#" }
];

const QuickLinks = [
  { title: "Track account opening", href: "#" },
  { title: "Track segment activation", href: "#" },
  { title: "Kite user manual", href: "#" }
];

export {Accordion_list,NoticeBoard,QuickLinks};