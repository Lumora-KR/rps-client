const siteSeen = {
  locations: [
    {
      id: 1,
      name: "Rameswaram",
      image: "https://source.unsplash.com/1200x800/?rameswaram",
      description:
        "A sacred island town connected to the mainland by the Pamban Bridge, known for its temples and pristine beaches.",
      spots: [
        {
          id: 1,
          name: "Ramanathaswamy Temple",
          image: "https://source.unsplash.com/800x600/?temple",
          openingHours: "5:00 AM - 1:00 PM, 3:00 PM - 9:00 PM",
          specialty:
            "Famous Jyotirlinga temple with the longest corridor among Hindu temples.",
        },
        {
          id: 2,
          name: "Pamban Bridge",
          image: "https://source.unsplash.com/800x600/?bridge",
          openingHours: "Open 24 hours",
          specialty: "India's first sea bridge with scenic ocean views.",
        },
        {
          id: 3,
          name: "Dhanushkodi Beach",
          image: "https://source.unsplash.com/800x600/?beach",
          openingHours: "6:00 AM - 6:00 PM",
          specialty:
            "A ghost town where the Bay of Bengal meets the Indian Ocean.",
        },
        {
          id: 4,
          name: "Panchamukhi Hanuman Temple",
          image: "https://source.unsplash.com/800x600/?hanuman",
          openingHours: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
          specialty: "Temple with five-faced Hanuman idol and floating stone.",
        },
        {
          id: 5,
          name: "Ramar Patham",
          image: "https://source.unsplash.com/800x600/?footprint",
          openingHours: "6:00 AM - 8:00 PM",
          specialty:
            "Sacred spot with Lord Rama's footprint on a chakra (wheel).",
        },
        {
          id: 6,
          name: "Agnitheertham",
          image: "https://source.unsplash.com/800x600/?sea",
          openingHours: "Open 24 hours",
          specialty: "Holy water site where devotees take a ritual bath.",
        },
        {
          id: 7,
          name: "Gandhamadhana Parvatham",
          image: "https://source.unsplash.com/800x600/?hill",
          openingHours: "6:00 AM - 6:00 PM",
          specialty:
            "The highest point in Rameswaram with a panoramic view of the island.",
        },
        {
          id: 8,
          name: "Kothandaramaswamy Temple",
          image: "https://source.unsplash.com/800x600/?ancient,temple",
          openingHours: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM",
          specialty:
            "An ancient temple dedicated to Lord Rama, surrounded by the sea.",
        },
        {
          id: 9,
          name: "Adam's Bridge (Ram Setu)",
          image: "https://source.unsplash.com/800x600/?bridge,sea",
          openingHours: "Viewable during daylight hours",
          specialty: "Limestone shoals connecting Rameswaram to Sri Lanka.",
        },
        {
          id: 10,
          name: "Villoondi Tirtham",
          image: "https://source.unsplash.com/800x600/?spring,water",
          openingHours: "6:00 AM - 6:00 PM",
          specialty:
            "Sacred spring in the sea, believed to be created by Lord Rama.",
        },
      ],
    },
    {
      id: 2,
      name: "Madurai",
      image: "https://source.unsplash.com/1200x800/?madurai",
      description:
        "Known as the 'Athens of the East', Madurai is famous for its temples, particularly the Meenakshi Amman Temple.",
      spots: [
        {
          id: 1,
          name: "Meenakshi Amman Temple",
          image: "https://source.unsplash.com/800x600/?meenakshi,temple",
          openingHours: "5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM",
          specialty:
            "Iconic temple with colorful gopurams and 33,000 sculptures.",
        },
        {
          id: 2,
          name: "Thirumalai Nayakkar Mahal",
          image: "https://source.unsplash.com/800x600/?palace",
          openingHours: "9:00 AM - 5:00 PM",
          specialty:
            "17th-century palace known for its Dravidian and Islamic architecture.",
        },
        {
          id: 3,
          name: "Alagar Koyil",
          image: "https://source.unsplash.com/800x600/?vishnu,temple",
          openingHours: "6:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
          specialty:
            "Temple dedicated to Lord Vishnu, located in the Alagar Hills.",
        },
        {
          id: 4,
          name: "Gandhi Memorial Museum",
          image: "https://source.unsplash.com/800x600/?museum",
          openingHours:
            "10:00 AM - 1:00 PM, 2:00 PM - 5:30 PM (Closed on Fridays)",
          specialty: "Museum showcasing Gandhi's life and Indian independence.",
        },
        {
          id: 5,
          name: "Pazhamudhir Solai",
          image: "https://source.unsplash.com/800x600/?murugan,temple",
          openingHours: "6:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
          specialty: "Murugan temple surrounded by lush greenery.",
        },
        {
          id: 6,
          name: "Koodal Azhagar Temple",
          image: "https://source.unsplash.com/800x600/?ancient,temple",
          openingHours: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
          specialty:
            "Ancient temple dedicated to Lord Vishnu with beautiful carvings.",
        },
        {
          id: 7,
          name: "Vandiyur Mariamman Teppakulam",
          image: "https://source.unsplash.com/800x600/?temple,tank",
          openingHours: "6:00 AM - 8:00 PM",
          specialty: "Temple tank where the annual float festival is held.",
        },
        {
          id: 8,
          name: "St. Mary's Cathedral",
          image: "https://source.unsplash.com/800x600/?cathedral",
          openingHours: "6:00 AM - 8:00 PM",
          specialty: "Gothic-style church known for its architecture.",
        },
        {
          id: 9,
          name: "ISKCON Madurai",
          image: "https://source.unsplash.com/800x600/?iskcon,temple",
          openingHours: "4:30 AM - 12:30 PM, 4:00 PM - 8:30 PM",
          specialty: "Peaceful temple dedicated to Lord Krishna.",
        },
        {
          id: 10,
          name: "Samanar Hills",
          image: "https://source.unsplash.com/800x600/?jain,temple",
          openingHours: "6:00 AM - 6:00 PM",
          specialty: "Rock-cut Jain temples with ancient carvings.",
        },
      ],
    },
    {
      id: 3,
      name: "Chennai",
      image: "https://source.unsplash.com/1200x800/?chennai",
      description:
        "The capital city of Tamil Nadu, known for its cultural heritage, beaches, and colonial architecture.",
      spots: [
        {
          id: 1,
          name: "Marina Beach",
          image: "https://source.unsplash.com/800x600/?marina,beach",
          openingHours: "Open 24 hours (Swimming not allowed)",
          specialty: "The second-longest urban beach in the world.",
        },
        {
          id: 2,
          name: "Kapaleeshwarar Temple",
          image: "https://source.unsplash.com/800x600/?kapaleeshwarar",
          openingHours: "5:30 AM - 12:00 PM, 4:00 PM - 9:30 PM",
          specialty: "A Dravidian-style temple dedicated to Lord Shiva.",
        },
        {
          id: 3,
          name: "Fort St. George",
          image: "https://source.unsplash.com/800x600/?fort",
          openingHours: "9:00 AM - 5:00 PM (Closed on Fridays)",
          specialty: "The first British fortress in India, now a museum.",
        },
        {
          id: 4,
          name: "Santhome Basilica",
          image: "https://source.unsplash.com/800x600/?basilica",
          openingHours: "6:00 AM - 8:00 PM",
          specialty: "Built over the tomb of St. Thomas.",
        },
        {
          id: 5,
          name: "Guindy National Park",
          image: "https://source.unsplash.com/800x600/?park,wildlife",
          openingHours: "9:00 AM - 5:30 PM (Closed on Tuesdays)",
          specialty: "Wildlife park within the city limits.",
        },
        {
          id: 6,
          name: "Valluvar Kottam",
          image: "https://source.unsplash.com/800x600/?monument",
          openingHours: "8:00 AM - 6:00 PM",
          specialty: "Monument dedicated to the Tamil poet Thiruvalluvar.",
        },
        {
          id: 7,
          name: "Government Museum",
          image: "https://source.unsplash.com/800x600/?museum,artifacts",
          openingHours: "9:30 AM - 5:00 PM (Closed on Fridays)",
          specialty: "Houses rare artifacts and historical exhibits.",
        },
        {
          id: 8,
          name: "Anna Zoological Park",
          image: "https://source.unsplash.com/800x600/?zoo",
          openingHours: "9:00 AM - 5:00 PM (Closed on Tuesdays)",
          specialty: "One of the largest zoos in South Asia.",
        },
        {
          id: 9,
          name: "Broken Bridge",
          image: "https://source.unsplash.com/800x600/?bridge,sunset",
          openingHours: "Open 24 hours",
          specialty: "A famous spot for sunset views.",
        },
        {
          id: 10,
          name: "Elliot's Beach",
          image: "https://source.unsplash.com/800x600/?beach,quiet",
          openingHours: "Open 24 hours (Swimming not recommended)",
          specialty: "Quiet beach ideal for relaxation.",
        },
      ],
    },
    {
      id: 4,
      name: "Kodaikanal",
      image: "https://source.unsplash.com/1200x800/?kodaikanal",
      description:
        "A hill station known as the 'Princess of Hill Stations', famous for its scenic beauty and pleasant climate.",
      spots: [
        {
          id: 1,
          name: "Kodaikanal Lake",
          image: "https://source.unsplash.com/800x600/?lake,boat",
          openingHours: "6:00 AM - 6:00 PM",
          specialty: "Man-made lake offering boating and cycling.",
        },
        {
          id: 2,
          name: "Coaker's Walk",
          image: "https://source.unsplash.com/800x600/?hills,path",
          openingHours: "7:00 AM - 7:00 PM",
          specialty: "Paved path with panoramic views of the hills.",
        },
        {
          id: 3,
          name: "Pillar Rocks",
          image: "https://source.unsplash.com/800x600/?rocks,mist",
          openingHours: "9:00 AM - 5:00 PM",
          specialty:
            "Three massive rock pillars standing tall amidst misty hills.",
        },
        {
          id: 4,
          name: "Bryant Park",
          image: "https://source.unsplash.com/800x600/?garden,flowers",
          openingHours: "9:00 AM - 6:00 PM",
          specialty: "Botanical garden with diverse plant species.",
        },
        {
          id: 5,
          name: "Silver Cascade Falls",
          image: "https://source.unsplash.com/800x600/?waterfall",
          openingHours: "7:00 AM - 6:00 PM",
          specialty:
            "180-foot waterfall created by the overflow of Kodai Lake.",
        },
        {
          id: 6,
          name: "Bear Shola Falls",
          image: "https://source.unsplash.com/800x600/?waterfall,forest",
          openingHours: "9:00 AM - 5:30 PM",
          specialty: "Seasonal waterfall surrounded by lush forest.",
        },
        {
          id: 7,
          name: "Green Valley View",
          image: "https://source.unsplash.com/800x600/?valley,view",
          openingHours: "9:30 AM - 5:30 PM",
          specialty: "Deep valley view with breathtaking sights.",
        },
        {
          id: 8,
          name: "Pine Forest",
          image: "https://source.unsplash.com/800x600/?pine,forest",
          openingHours: "6:00 AM - 6:00 PM",
          specialty: "A dense pine forest ideal for nature walks.",
        },
        {
          id: 9,
          name: "Guna Caves",
          image: "https://source.unsplash.com/800x600/?cave",
          openingHours: "9:00 AM - 5:00 PM",
          specialty: "Mysterious caves named after a Tamil movie.",
        },
        {
          id: 10,
          name: "Moier Point",
          image: "https://source.unsplash.com/800x600/?viewpoint",
          openingHours: "8:00 AM - 6:00 PM",
          specialty: "Scenic viewpoint at the entrance of Kodaikanal.",
        },
      ],
    },
    {
      id: 5,
      name: "Kanyakumari",
      image: "https://source.unsplash.com/1200x800/?kanyakumari",
      description:
        "The southernmost tip of mainland India where the Arabian Sea, Bay of Bengal, and Indian Ocean meet.",
      spots: [
        {
          id: 1,
          name: "Vivekananda Rock Memorial",
          image: "https://source.unsplash.com/800x600/?memorial,rock",
          openingHours: "8:00 AM - 4:30 PM",
          specialty: "A sacred monument dedicated to Swami Vivekananda.",
        },
        {
          id: 2,
          name: "Thiruvalluvar Statue",
          image: "https://source.unsplash.com/800x600/?statue",
          openingHours: "8:00 AM - 4:30 PM",
          specialty: "133-foot statue of the Tamil poet.",
        },
        {
          id: 3,
          name: "Kanyakumari Beach",
          image: "https://source.unsplash.com/800x600/?beach,sunrise",
          openingHours: "Open 24 hours",
          specialty:
            "Meeting point of the Arabian Sea, Bay of Bengal, and the Indian Ocean.",
        },
        {
          id: 4,
          name: "Sunrise and Sunset Point",
          image: "https://source.unsplash.com/800x600/?sunrise,sunset",
          openingHours: "Open 24 hours",
          specialty:
            "Best spot to witness the sunrise and sunset over the ocean.",
        },
        {
          id: 5,
          name: "Kumari Amman Temple",
          image: "https://source.unsplash.com/800x600/?temple,goddess",
          openingHours: "4:30 AM - 12:30 PM, 4:00 PM - 8:00 PM",
          specialty: "Temple dedicated to Goddess Kanyakumari.",
        },
        {
          id: 6,
          name: "Padmanabhapuram Palace",
          image: "https://source.unsplash.com/800x600/?palace,wooden",
          openingHours: "9:00 AM - 5:00 PM (Closed on Mondays)",
          specialty: "Wooden palace showcasing Kerala architecture.",
        },
        {
          id: 7,
          name: "Gandhi Memorial",
          image: "https://source.unsplash.com/800x600/?memorial,gandhi",
          openingHours: "7:00 AM - 7:00 PM",
          specialty:
            "A memorial built where Gandhi's ashes were kept before immersion.",
        },
        {
          id: 8,
          name: "Our Lady of Ransom Church",
          image: "https://source.unsplash.com/800x600/?church,gothic",
          openingHours: "6:00 AM - 8:00 PM",
          specialty: "Gothic-style church overlooking the sea.",
        },
        {
          id: 9,
          name: "Vattakottai Fort",
          image: "https://source.unsplash.com/800x600/?fort,sea",
          openingHours: "8:00 AM - 5:00 PM",
          specialty: "Seaside fort with panoramic sea views.",
        },
        {
          id: 10,
          name: "Bharat Mata Temple",
          image: "https://source.unsplash.com/800x600/?temple,india",
          openingHours: "6:00 AM - 8:00 PM",
          specialty: "Temple dedicated to Mother India.",
        },
      ],
    },
    {
      id: 6,
      name: "Tanjavur",
      image: "https://source.unsplash.com/1200x800/?thanjavur",
      description:
        "Known as the 'Rice Bowl of Tamil Nadu', famous for its Brihadeeswarar Temple, art, and South Indian classical music.",
      spots: [
        {
          id: 1,
          name: "Brihadeeswarar Temple",
          image: "https://source.unsplash.com/800x600/?brihadeeswarar",
          openingHours: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
          specialty:
            "UNESCO World Heritage site, known for its Chola architecture.",
        },
        {
          id: 2,
          name: "Thanjavur Palace",
          image: "https://source.unsplash.com/800x600/?palace,ancient",
          openingHours: "9:00 AM - 6:00 PM",
          specialty: "16th-century palace with ancient art and sculptures.",
        },
        {
          id: 3,
          name: "Saraswathi Mahal Library",
          image: "https://source.unsplash.com/800x600/?library,ancient",
          openingHours: "10:00 AM - 5:00 PM (Closed on Fridays)",
          specialty: "Ancient library with rare palm-leaf manuscripts.",
        },
        {
          id: 4,
          name: "Schwartz Church",
          image: "https://source.unsplash.com/800x600/?church,colonial",
          openingHours: "8:00 AM - 6:00 PM",
          specialty: "A colonial-era church built by the British.",
        },
        {
          id: 5,
          name: "Rajarajan Manimandapam",
          image: "https://source.unsplash.com/800x600/?memorial,king",
          openingHours: "9:00 AM - 5:00 PM",
          specialty: "Memorial for the Chola king Rajaraja I.",
        },
        {
          id: 6,
          name: "Sangeetha Mahal",
          image: "https://source.unsplash.com/800x600/?music,hall",
          openingHours: "9:00 AM - 5:00 PM",
          specialty: "Historical hall used for musical performances.",
        },
        {
          id: 7,
          name: "Gangaikonda Cholapuram",
          image: "https://source.unsplash.com/800x600/?temple,chola",
          openingHours: "6:00 AM - 12:00 PM, 4:00 PM - 8:00 PM",
          specialty: "Temple built by Rajendra Chola I.",
        },
        {
          id: 8,
          name: "Punnainallur Mariamman Temple",
          image: "https://source.unsplash.com/800x600/?temple,mariamman",
          openingHours: "6:00 AM - 1:00 PM, 4:00 PM - 8:30 PM",
          specialty: "Temple dedicated to Goddess Mariamman.",
        },
        {
          id: 9,
          name: "Alangudi Temple",
          image: "https://source.unsplash.com/800x600/?temple,jupiter",
          openingHours: "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
          specialty: "Famous Navagraha temple dedicated to Guru (Jupiter).",
        },
        {
          id: 10,
          name: "Art Gallery",
          image: "https://source.unsplash.com/800x600/?art,museum",
          openingHours: "10:00 AM - 5:00 PM (Closed on Fridays)",
          specialty: "Museum showcasing bronze statues and Chola artifacts.",
        },
      ],
    },
  ],
};

export default siteSeen;
