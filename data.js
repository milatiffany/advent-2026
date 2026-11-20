// =====================================================================
//  TIFFANY & CO. ADVENT CALENDAR - CONTENT FILE
//  This is the ONLY file to edit day to day. See README for the guide.
// =====================================================================


// ---------------------------------------------------------------------
//  1. DAILY WINNERS
//  Add the winner(s) the day after the challenge.
//  The number = the day of the CHALLENGE that was won.
//
//  ONE WINNER (most days, and the managers' days 7 and 21):
//  1: {name: "Camille D.", store: "Paris Rue de la Paix", result: "Lock ring in diamonds"},
//     Photo: winners/day01.jpg
//
//  ONE WINNER PER BOUTIQUE (Saturdays 5, 12 and 19), between [ and ]:
//  5: [
//    {name: "Hugo B.", store: "Monaco", result: "€12K via appointments"},
//    {name: "Léa M.", store: "Nice", result: "€9K via appointments"},
//  ],
//     Photos: winners/day05-1.jpg, winners/day05-2.jpg... in the same order as the list
//
//  No photo? Nothing to do: the initials are shown instead.
// ---------------------------------------------------------------------

const WINNERS = {

};


// ---------------------------------------------------------------------
//  PRIZE shown on every challenge (one per winner).
//  To change it for a single day, add  prize:"..."  to that challenge.
// ---------------------------------------------------------------------

const PRIZE = "€25 voucher";


// ---------------------------------------------------------------------
//  2. THE 24 CHALLENGES
//  t     = title
//  th    = category shown on the card
//  x     = what the winner achieves
//  scope = "cluster"  -> one winner across FNBM
//          "store"    -> one winner per boutique (Saturdays)
//          "managers" -> store managers' challenge
// ---------------------------------------------------------------------

const CHALLENGES = [
  /* 1  Tue */ {t:"Say Yes to Tiffany", th:"Love & Celebration", scope:"cluster",
                x:"Most expensive Love & Celebration piece of the day."},
  /* 2  Wed */ {t:"Silver Lining", th:"HardWear", scope:"cluster",
                x:"Top silver HardWear performer of the day, in units."},
  /* 3  Thu */ {t:"Appointment Setter", th:"Clienteling", scope:"cluster",
                x:"Highest number of appointments of the day."},
  /* 4  Fri */ {t:"Top Recruiter", th:"Clienteling", scope:"cluster",
                x:"Highest number of prospects created."},
  /* 5  Sat */ {t:"Appointment Sales Driver", th:"Clienteling", scope:"store",
                x:"Highest sales generated through appointments of the day."},
  /* 6  Sun */ {t:"The Perfect Set", th:"Styling", scope:"cluster",
                x:"Highest number of tickets with two or more different pieces from the same collection."},
  /* 7  Mon */ {t:"Growing Season", th:"Store managers", scope:"managers",
                x:"The store with the highest sales growth over the previous week (WTD). The store manager is rewarded."},
  /* 8  Tue */ {t:"Appointment Converter", th:"Weekly · Clienteling", scope:"cluster",
                x:"Highest appointment conversion rate from 1 to 7 December (minimum 3 appointments)."},
  /* 9  Wed */ {t:"Tie the Knot", th:"Knot", scope:"cluster",
                x:"Most expensive Knot piece of the day."},
  /* 10 Thu */ {t:"Biggest Appointment Sale", th:"Clienteling", scope:"cluster",
                x:"Highest transaction made during an appointment today."},
  /* 11 Fri */ {t:"Hard to Resist", th:"HardWear", scope:"cluster",
                x:"Most expensive HardWear piece of the day."},
  /* 12 Sat */ {t:"Busy Elf", th:"Volume", scope:"store",
                x:"Highest number of transactions of the day."},
  /* 13 Sun */ {t:"Power Appointment", th:"Clienteling", scope:"cluster",
                x:"Highest number of units sold in appointments today."},
  /* 14 Mon */ {t:"Schlum Wonderland", th:"Schlumberger", scope:"cluster",
                x:"Top Schlumberger performer of the previous week (WTD), in sales."},
  /* 15 Tue */ {t:"Fill the Calendar", th:"Clienteling", scope:"cluster",
                x:"Highest number of confirmed appointments booked for 17 to 24 December."},
  /* 16 Wed */ {t:"Elsa's Gift", th:"Elsa Peretti", scope:"cluster",
                x:"Most expensive Elsa Peretti piece of the day."},
  /* 17 Thu */ {t:"Big Ticket Energy", th:"Value", scope:"cluster",
                x:"Highest ticket of the day."},
  /* 18 Fri */ {t:"Almost There", th:"Target", scope:"cluster",
                x:"Highest % of December target achieved, month to date."},
  /* 19 Sat */ {t:"Prospect Converter", th:"Weekly · Clienteling", scope:"store",
                x:"Highest number of converted prospects, among prospects created from 7 to 14 December."},
  /* 20 Sun */ {t:"Icon Queen", th:"Icons", scope:"cluster",
                x:"Top Icons performer of the day, in units."},
  /* 21 Mon */ {t:"Growing Season II", th:"Store managers", scope:"managers",
                x:"The store with the highest sales growth over the previous week (WTD). The store manager is rewarded."},
  /* 22 Tue */ {t:"Icon King", th:"Icons", scope:"cluster",
                x:"Top Icons performer of the day, in sales."},
  /* 23 Wed */ {t:"Prospect Revenue Champion", th:"Weekly · Clienteling", scope:"cluster",
                x:"Highest total sales generated from prospects created from 15 to 21 December."},
  /* 24 Thu */ {t:"Christmas Eve Special", th:"Special", scope:"cluster",
                x:"A very special challenge, revealed on the day."}
];
