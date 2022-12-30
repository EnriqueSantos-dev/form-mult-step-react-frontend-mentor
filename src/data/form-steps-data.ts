export default {
  step1: {
    title: "personal info",
    subTitle: "please provide your name, email address, and phone number",
    inputsPlaceholders: {
      name: "e.g Stephan King",
      email: "e.g.stephanking@lorem.com",
      phone: "+1 234 567 890",
    },
  },
  step2: {
    title: "Select your plan",
    subTittle: "you have the option of monthly or yearly billing",
    monthly: [
      {
        id: 1,
        title: "Arcade",
        price: 9,
        typePrice: "monthly",
        icon: "/assets/images/icon-arcade.svg",
        subTitle: null,
      },
      {
        id: 2,
        title: "Advanced",
        price: 12,
        typePrice: "monthly",
        icon: "/assets/images/icon-advanced.svg",
        subTitle: null,
      },
      {
        id: 3,
        title: "Pro",
        price: 15,
        typePrice: "monthly",
        icon: "/assets/images/icon-pro.svg",
        subTitle: null,
      },
    ],
    yearly: [
      {
        id: 1,
        title: "Arcade",
        price: 90,
        typePrice: "yearly",
        icon: "/assets/images/icon-arcade.svg",
        subTitle: "2 monthlys free",
      },
      {
        id: 2,
        title: "Advanced",
        price: 120,
        typePrice: "yearly",
        icon: "/assets/images/icon-advanced.svg",
        subTitle: "2 monthlys free",
      },
      {
        id: 3,
        title: "Pro",
        price: 150,
        typePrice: "yearly",
        icon: "/assets/images/icon-pro.svg",
        subTitle: "2 monthlys free",
      },
    ],
  },
  step3: {
    title: "Pick add-ons",
    subTitle: "add-ons help enhance your gaming experience.",
    addOns: {
      monthly: [
        {
          id: 1,
          title: "online service",
          description: "access to multiplayer games",
          price: 1,
        },
        {
          id: 2,
          title: "large storage",
          description: "extra 1TB of cloud save",
          price: 2,
        },
        {
          id: 3,
          title: "customizable profile",
          description: "custom theme on your profile",
          price: 2,
        },
      ],
      yearly: [
        {
          id: 1,
          title: "online service",
          description: "access to multiplayer games",
          price: 10,
        },
        {
          id: 2,
          title: "large storage",
          description: "extra 1TB of cloud save",
          price: 20,
        },
        {
          id: 3,
          title: "customizable profile",
          description: "custom theme on your profile",
          price: 20,
        },
      ],
    },
  },
  step4: {
    title: "Finishing up",
    subTitle: "Double-check everything looks OK before confirming.",
  },
  step5: {
    icon: "/assets/images/icon-thank-you.svg",
    title: "Thank you!",
    description:
      "thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgamming.com.",
  },
};
