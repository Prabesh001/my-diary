const posts = [
  {
    _id: 1,
    username: "Christal Dallon",
    profile: "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
    description:
      "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat",
    image: "http://dummyimage.com/215x100.png/dddddd/000000",
    time: "10/3/2024",
  },
  {
    _id: 21,
    username: "Christal Dallon",
    profile: "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
    description:
      "Hello World! This is a test post to check the functionality of the application.",
    image: "http://dummyimage.com/215x100.png/dddddd/000000",
    time: "10/3/2024",
  },
  {
    _id: 2,
    username: "Daile Aitkin",
    profile: "http://dummyimage.com/247x100.png/ff4444/ffffff",
    description:
      "congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
    emotion: "Akershus",
    image: "http://dummyimage.com/156x100.png/ff4444/ffffff",
    time: "10/11/2024",
  },
  {
    _id: 3,
    username: "Tamera Livingston",
    profile: "http://dummyimage.com/122x100.png/ff4444/ffffff",
    description:
      "justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi",
    emotion: "Akershus",
    image: "http://dummyimage.com/108x100.png/cc0000/ffffff",
    time: "2/8/2025",
  },
  {
    _id: 4,
    username: "Myrilla Adel",
    profile: "http://dummyimage.com/136x100.png/cc0000/ffffff",
    description:
      "platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat",
    emotion: "Akershus",
    image: "http://dummyimage.com/197x100.png/dddddd/000000",
    time: "4/16/2025",
  },
  {
    _id: 5,
    username: "Mikel Pease",
    profile: "http://dummyimage.com/183x100.png/dddddd/000000",
    description:
      "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia",
    emotion: "Akershus",
    image: "http://dummyimage.com/162x100.png/5fa2dd/ffffff",
    time: "9/4/2024",
  },
  {
    _id: 6,
    username: "Kile Ellacott",
    profile: "http://dummyimage.com/155x100.png/dddddd/000000",
    description:
      "convallis morbi odio odio elementum eu interdum eu tincidunt in leo",
    emotion: "Akershus",
    image: "http://dummyimage.com/196x100.png/ff4444/ffffff",
    time: "6/8/2024",
  },
  {
    _id: 7,
    username: "Jimmie Cossar",
    profile: "http://dummyimage.com/135x100.png/5fa2dd/ffffff",
    description:
      "interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit",
    emotion: "Akershus",
    image: "http://dummyimage.com/108x100.png/dddddd/000000",
    time: "2/25/2025",
  },
  {
    _id: 8,
    username: "Millie Savell",
    profile: "http://dummyimage.com/216x100.png/5fa2dd/ffffff",
    description:
      "aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam",
    emotion: "Akershus",
    image: "http://dummyimage.com/211x100.png/ff4444/ffffff",
    time: "8/5/2024",
  },
  {
    _id: 9,
    username: "Ainslee Pitts",
    profile: "http://dummyimage.com/104x100.png/5fa2dd/ffffff",
    description:
      "eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis",
    emotion: "Akershus",
    image: "http://dummyimage.com/176x100.png/dddddd/000000",
    time: "2/26/2025",
  },
  {
    _id: 10,
    username: "Linea Russ",
    profile: "http://dummyimage.com/117x100.png/cc0000/ffffff",
    description:
      "turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a",
    emotion: "Akershus",
    image: "http://dummyimage.com/172x100.png/cc0000/ffffff",
    time: "5/10/2024",
  },
  {
    _id: 11,
    username: "Min Du Pre",
    profile: "http://dummyimage.com/131x100.png/cc0000/ffffff",
    description:
      "nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim",
    emotion: "Akershus",
    image: "http://dummyimage.com/171x100.png/dddddd/000000",
    time: "9/6/2024",
  },
  {
    _id: 12,
    username: "Kathi Yesichev",
    profile: "http://dummyimage.com/218x100.png/cc0000/ffffff",
    description:
      "nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
    emotion: "Akershus",
    image: "http://dummyimage.com/143x100.png/5fa2dd/ffffff",
    time: "5/28/2024",
  },
  {
    _id: 13,
    username: "Danica Gillham",
    profile: "http://dummyimage.com/143x100.png/cc0000/ffffff",
    description:
      "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
    emotion: "Akershus",
    image: "http://dummyimage.com/115x100.png/cc0000/ffffff",
    time: "8/21/2024",
  },
  {
    _id: 14,
    username: "Ayn Blaes",
    profile: "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
    description:
      "nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet",
    emotion: "Akershus",
    image: "http://dummyimage.com/237x100.png/ff4444/ffffff",
    time: "6/23/2024",
  },
  {
    _id: 15,
    username: "Jessamyn Driver",
    profile: "http://dummyimage.com/177x100.png/ff4444/ffffff",
    description:
      "turpis enim blandit mi in porttitor pede justo eu massa donec",
    emotion: "Akershus",
    image: "http://dummyimage.com/127x100.png/dddddd/000000",
    time: "5/21/2024",
  },
  {
    _id: 16,
    username: "Yancey Simmig",
    profile: "http://dummyimage.com/228x100.png/ff4444/ffffff",
    description:
      "eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
    emotion: "Akershus",
    image: "http://dummyimage.com/203x100.png/ff4444/ffffff",
    time: "10/25/2024",
  },
  {
    _id: 17,
    username: "Arlyne Romanelli",
    profile: "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
    description:
      "sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat",
    emotion: "Akershus",
    image: "http://dummyimage.com/152x100.png/5fa2dd/ffffff",
    time: "9/16/2024",
  },
  {
    _id: 18,
    username: "Shurlocke Tewelson",
    profile: "http://dummyimage.com/106x100.png/dddddd/000000",
    description:
      "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla",
    emotion: "Akershus",
    image: "http://dummyimage.com/248x100.png/5fa2dd/ffffff",
    time: "5/26/2024",
  },
  {
    _id: 19,
    username: "Lita Guidoni",
    profile: "http://dummyimage.com/179x100.png/cc0000/ffffff",
    description:
      "pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate",
    emotion: "Akershus",
    image: "http://dummyimage.com/167x100.png/dddddd/000000",
    time: "6/25/2024",
  },
  {
    _id: 20,
    username: "Jeffy Kynson",
    profile: "http://dummyimage.com/199x100.png/5fa2dd/ffffff",
    description:
      "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt",
    emotion: "Akershus",
    image: "http://dummyimage.com/221x100.png/dddddd/000000",
    time: "2/15/2025",
  },
  {
    _id: 21,
    username: "Channa Ivic",
    profile: "http://dummyimage.com/164x100.png/dddddd/000000",
    description:
      "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin",
    emotion: "Akershus",
    image: "http://dummyimage.com/139x100.png/dddddd/000000",
    time: "3/30/2025",
  },
  {
    _id: 22,
    username: "Marlowe Tanfield",
    profile: "http://dummyimage.com/219x100.png/dddddd/000000",
    description:
      "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
    emotion: "Akershus",
    image: "http://dummyimage.com/152x100.png/5fa2dd/ffffff",
    time: "8/31/2024",
  },
  {
    _id: 23,
    username: "Jasen Tibbles",
    profile: "http://dummyimage.com/248x100.png/cc0000/ffffff",
    description:
      "nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse",
    emotion: "Akershus",
    image: "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
    time: "3/25/2025",
  },
  {
    _id: 24,
    username: "Dino Dolohunty",
    profile: "http://dummyimage.com/171x100.png/cc0000/ffffff",
    description:
      "in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis",
    emotion: "Akershus",
    image: "http://dummyimage.com/179x100.png/ff4444/ffffff",
    time: "8/29/2024",
  },
  {
    _id: 25,
    username: "Annabelle Portingale",
    profile: "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
    description:
      "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",
    emotion: "Akershus",
    image: "http://dummyimage.com/200x100.png/dddddd/000000",
    time: "10/11/2024",
  },
  {
    _id: 26,
    username: "Amalie Mulgrew",
    profile: "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
    description:
      "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo",
    emotion: "Akershus",
    image: "http://dummyimage.com/157x100.png/cc0000/ffffff",
    time: "5/6/2024",
  },
  {
    _id: 27,
    username: "Amalie McCritchie",
    profile: "http://dummyimage.com/188x100.png/5fa2dd/ffffff",
    description:
      "urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",
    emotion: "Akershus",
    image: "http://dummyimage.com/155x100.png/dddddd/000000",
    time: "2/18/2025",
  },
  {
    _id: 28,
    username: "Burt Skydall",
    profile: "http://dummyimage.com/117x100.png/5fa2dd/ffffff",
    description:
      "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
    emotion: "Akershus",
    image: "http://dummyimage.com/187x100.png/ff4444/ffffff",
    time: "6/25/2024",
  },
  {
    _id: 29,
    username: "Sonny Gall",
    profile: "http://dummyimage.com/246x100.png/dddddd/000000",
    description:
      "rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi",
    emotion: "Akershus",
    image: "http://dummyimage.com/124x100.png/cc0000/ffffff",
    time: "12/19/2024",
  },
  {
    _id: 30,
    username: "Irv Housden",
    profile: "http://dummyimage.com/200x100.png/cc0000/ffffff",
    description:
      "est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum",
    emotion: "Akershus",
    image: "http://dummyimage.com/234x100.png/dddddd/000000",
    time: "3/18/2025",
  },
  {
    _id: 31,
    username: "Alfonso Sweetenham",
    profile: "http://dummyimage.com/228x100.png/5fa2dd/ffffff",
    description:
      "blandit lacinia erat vestibulum sed magna at nunc commodo placerat",
    emotion: "Akershus",
    image: "http://dummyimage.com/150x100.png/cc0000/ffffff",
    time: "1/13/2025",
  },
  {
    _id: 32,
    username: "Karilynn Murthwaite",
    profile: "http://dummyimage.com/243x100.png/ff4444/ffffff",
    description:
      "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum",
    emotion: "Akershus",
    image: "http://dummyimage.com/121x100.png/cc0000/ffffff",
    time: "10/4/2024",
  },
  {
    _id: 33,
    username: "Shirl Frunks",
    profile: "http://dummyimage.com/170x100.png/cc0000/ffffff",
    description:
      "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo",
    emotion: "Akershus",
    image: "http://dummyimage.com/176x100.png/cc0000/ffffff",
    time: "3/16/2025",
  },
  {
    _id: 34,
    username: "Cassius Twelvetree",
    profile: "http://dummyimage.com/183x100.png/5fa2dd/ffffff",
    description:
      "diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis",
    emotion: "Akershus",
    image: "http://dummyimage.com/113x100.png/dddddd/000000",
    time: "5/12/2024",
  },
  {
    _id: 35,
    username: "Hedvig Enderwick",
    profile: "http://dummyimage.com/242x100.png/5fa2dd/ffffff",
    description:
      "aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
    emotion: "Akershus",
    image: "http://dummyimage.com/245x100.png/cc0000/ffffff",
    time: "8/6/2024",
  },
  {
    _id: 36,
    username: "Skippie Fenge",
    profile: "http://dummyimage.com/243x100.png/cc0000/ffffff",
    description:
      "ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam",
    emotion: "Akershus",
    image: "http://dummyimage.com/210x100.png/ff4444/ffffff",
    time: "10/13/2024",
  },
  {
    _id: 37,
    username: "Antony Snalham",
    profile: "http://dummyimage.com/199x100.png/ff4444/ffffff",
    description:
      "a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
    emotion: "Akershus",
    image: "http://dummyimage.com/102x100.png/cc0000/ffffff",
    time: "6/26/2024",
  },
  {
    _id: 38,
    username: "Danette Bergstrand",
    profile: "http://dummyimage.com/114x100.png/dddddd/000000",
    description:
      "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
    emotion: "Akershus",
    image: "http://dummyimage.com/220x100.png/dddddd/000000",
    time: "4/7/2025",
  },
  {
    _id: 39,
    username: "Jacquelynn Kane",
    profile: "http://dummyimage.com/137x100.png/5fa2dd/ffffff",
    description:
      "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc",
    emotion: "Akershus",
    image: "http://dummyimage.com/140x100.png/dddddd/000000",
    time: "1/13/2025",
  },
  {
    _id: 40,
    username: "Timofei Fibbitts",
    profile: "http://dummyimage.com/163x100.png/ff4444/ffffff",
    description:
      "habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
    emotion: "Akershus",
    image: "http://dummyimage.com/132x100.png/dddddd/000000",
    time: "8/15/2024",
  },
  {
    _id: 41,
    username: "Silvan Wreford",
    profile: "http://dummyimage.com/225x100.png/ff4444/ffffff",
    description:
      "vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget",
    emotion: "Akershus",
    image: "http://dummyimage.com/184x100.png/cc0000/ffffff",
    time: "7/24/2024",
  },
  {
    _id: 42,
    username: "Rheba McColm",
    profile: "http://dummyimage.com/220x100.png/cc0000/ffffff",
    description:
      "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat",
    emotion: "Akershus",
    image: "http://dummyimage.com/237x100.png/cc0000/ffffff",
    time: "2/17/2025",
  },
  {
    _id: 43,
    username: "Ed Gorgl",
    profile: "http://dummyimage.com/223x100.png/dddddd/000000",
    description:
      "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla",
    emotion: "Akershus",
    image: "http://dummyimage.com/144x100.png/dddddd/000000",
    time: "7/18/2024",
  },
  {
    _id: 44,
    username: "Clair Norvell",
    profile: "http://dummyimage.com/230x100.png/5fa2dd/ffffff",
    description:
      "platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque",
    emotion: "Akershus",
    image: "http://dummyimage.com/174x100.png/cc0000/ffffff",
    time: "5/16/2024",
  },
  {
    _id: 45,
    username: "Ninon McMakin",
    profile: "http://dummyimage.com/214x100.png/5fa2dd/ffffff",
    description:
      "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
    emotion: "Akershus",
    image: "http://dummyimage.com/217x100.png/ff4444/ffffff",
    time: "12/6/2024",
  },
  {
    _id: 46,
    username: "Shane Bails",
    profile: "http://dummyimage.com/164x100.png/dddddd/000000",
    description:
      "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
    emotion: "Akershus",
    image: "http://dummyimage.com/186x100.png/dddddd/000000",
    time: "11/25/2024",
  },
  {
    _id: 47,
    username: "Callida Malzard",
    profile: "http://dummyimage.com/179x100.png/ff4444/ffffff",
    description:
      "platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras",
    emotion: "Akershus",
    image: "http://dummyimage.com/193x100.png/ff4444/ffffff",
    time: "10/27/2024",
  },
  {
    _id: 48,
    username: "Lynnet Melross",
    profile: "http://dummyimage.com/149x100.png/5fa2dd/ffffff",
    description:
      "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",
    emotion: "Akershus",
    image: "http://dummyimage.com/216x100.png/cc0000/ffffff",
    time: "2/7/2025",
  },
  {
    _id: 49,
    username: "Maitilde Kidstone",
    profile: "http://dummyimage.com/130x100.png/ff4444/ffffff",
    description:
      "elementum nullam varius nulla facilisi cras non velit nec nisi",
    emotion: "Akershus",
    image: "http://dummyimage.com/195x100.png/ff4444/ffffff",
    time: "4/21/2025",
  },
  {
    _id: 50,
    username: "Allyce Bensen",
    profile: "http://dummyimage.com/111x100.png/cc0000/ffffff",
    description:
      "integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
    emotion: "Akershus",
    image: "http://dummyimage.com/219x100.png/cc0000/ffffff",
    time: "1/11/2025",
  },
  {
    _id: 51,
    username: "Kippie Lepope",
    profile: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
    description:
      "amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla",
    emotion: "Akershus",
    image: "http://dummyimage.com/220x100.png/5fa2dd/ffffff",
    time: "4/10/2025",
  },
  {
    _id: 52,
    username: "Kevina Suart",
    profile: "http://dummyimage.com/108x100.png/5fa2dd/ffffff",
    description: "venenatis lacinia aenean sit amet justo morbi ut odio cras",
    emotion: "Akershus",
    image: "http://dummyimage.com/191x100.png/dddddd/000000",
    time: "7/29/2024",
  },
  {
    _id: 53,
    username: "Bartlet Hadaway",
    profile: "http://dummyimage.com/163x100.png/cc0000/ffffff",
    description:
      "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    emotion: "Akershus",
    image: "http://dummyimage.com/204x100.png/dddddd/000000",
    time: "1/18/2025",
  },
  {
    _id: 54,
    username: "Bebe Tidmas",
    profile: "http://dummyimage.com/217x100.png/cc0000/ffffff",
    description:
      "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie",
    emotion: "Akershus",
    image: "http://dummyimage.com/199x100.png/5fa2dd/ffffff",
    time: "10/17/2024",
  },
  {
    _id: 55,
    username: "Nickie Avramovic",
    profile: "http://dummyimage.com/163x100.png/ff4444/ffffff",
    description:
      "proin leo odio porttitor id consequat in consequat ut nulla sed accumsan",
    emotion: "Akershus",
    image: "http://dummyimage.com/230x100.png/cc0000/ffffff",
    time: "9/4/2024",
  },
  {
    _id: 56,
    username: "Barby Goshawke",
    profile: "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
    description:
      "mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus",
    emotion: "Akershus",
    image: "http://dummyimage.com/213x100.png/cc0000/ffffff",
    time: "4/20/2025",
  },
  {
    _id: 57,
    username: "Valdemar Blesli",
    profile: "http://dummyimage.com/170x100.png/dddddd/000000",
    description:
      "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
    emotion: "Akershus",
    image: "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
    time: "9/5/2024",
  },
  {
    _id: 58,
    username: "Elset Mathivat",
    profile: "http://dummyimage.com/204x100.png/cc0000/ffffff",
    description:
      "non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh",
    emotion: "Akershus",
    image: "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
    time: "5/5/2024",
  },
  {
    _id: 59,
    username: "Alex Brenton",
    profile: "http://dummyimage.com/104x100.png/5fa2dd/ffffff",
    description:
      "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
    emotion: "Akershus",
    image: "http://dummyimage.com/120x100.png/ff4444/ffffff",
    time: "7/9/2024",
  },
  {
    _id: 60,
    username: "Conrade Zebedee",
    profile: "http://dummyimage.com/168x100.png/cc0000/ffffff",
    description:
      "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    emotion: "Akershus",
    image: "http://dummyimage.com/218x100.png/ff4444/ffffff",
    time: "12/13/2024",
  },
  {
    _id: 61,
    username: "Clarie Beautyman",
    profile: "http://dummyimage.com/197x100.png/ff4444/ffffff",
    description:
      "diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu",
    emotion: "Akershus",
    image: "http://dummyimage.com/213x100.png/dddddd/000000",
    time: "2/14/2025",
  },
  {
    _id: 62,
    username: "Abbe Ault",
    profile: "http://dummyimage.com/126x100.png/ff4444/ffffff",
    description:
      "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at",
    emotion: "Akershus",
    image: "http://dummyimage.com/102x100.png/ff4444/ffffff",
    time: "3/4/2025",
  },
  {
    _id: 63,
    username: "Quinton Lewing",
    profile: "http://dummyimage.com/118x100.png/cc0000/ffffff",
    description:
      "at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
    emotion: "Akershus",
    image: "http://dummyimage.com/231x100.png/ff4444/ffffff",
    time: "1/31/2025",
  },
  {
    _id: 64,
    username: "Bree Posse",
    profile: "http://dummyimage.com/233x100.png/cc0000/ffffff",
    description:
      "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id",
    emotion: "Akershus",
    image: "http://dummyimage.com/158x100.png/dddddd/000000",
    time: "3/11/2025",
  },
  {
    _id: 65,
    username: "Sky Spencelayh",
    profile: "http://dummyimage.com/103x100.png/ff4444/ffffff",
    description:
      "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus",
    emotion: "Akershus",
    image: "http://dummyimage.com/229x100.png/dddddd/000000",
    time: "12/26/2024",
  },
  {
    _id: 66,
    username: "Lizabeth Eichmann",
    profile: "http://dummyimage.com/237x100.png/dddddd/000000",
    description:
      "aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio",
    emotion: "Akershus",
    image: "http://dummyimage.com/111x100.png/ff4444/ffffff",
    time: "1/20/2025",
  },
  {
    _id: 67,
    username: "Conrad Brandin",
    profile: "http://dummyimage.com/106x100.png/5fa2dd/ffffff",
    description:
      "in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    emotion: "Akershus",
    image: "http://dummyimage.com/199x100.png/ff4444/ffffff",
    time: "7/7/2024",
  },
  {
    _id: 68,
    username: "Britney Schmidt",
    profile: "http://dummyimage.com/160x100.png/dddddd/000000",
    description:
      "donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies",
    emotion: "Akershus",
    image: "http://dummyimage.com/205x100.png/ff4444/ffffff",
    time: "3/14/2025",
  },
  {
    _id: 69,
    username: "Marchall Lillee",
    profile: "http://dummyimage.com/203x100.png/dddddd/000000",
    description: "odio in hac habitasse platea dictumst maecenas ut massa quis",
    emotion: "Akershus",
    image: "http://dummyimage.com/224x100.png/dddddd/000000",
    time: "9/14/2024",
  },
  {
    _id: 70,
    username: "Donnajean Whipp",
    profile: "http://dummyimage.com/123x100.png/cc0000/ffffff",
    description:
      "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus",
    emotion: "Akershus",
    image: "http://dummyimage.com/178x100.png/ff4444/ffffff",
    time: "4/10/2025",
  },
  {
    _id: 71,
    username: "Reginauld Von Der Empten",
    profile: "http://dummyimage.com/204x100.png/5fa2dd/ffffff",
    description:
      "nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa",
    emotion: "Akershus",
    image: "http://dummyimage.com/114x100.png/cc0000/ffffff",
    time: "12/5/2024",
  },
  {
    _id: 72,
    username: "Becka Rains",
    profile: "http://dummyimage.com/192x100.png/cc0000/ffffff",
    description:
      "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus",
    emotion: "Akershus",
    image: "http://dummyimage.com/225x100.png/dddddd/000000",
    time: "4/8/2025",
  },
  {
    _id: 73,
    username: "Shir McPhilip",
    profile: "http://dummyimage.com/212x100.png/5fa2dd/ffffff",
    description:
      "vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien",
    emotion: "Akershus",
    image: "http://dummyimage.com/126x100.png/cc0000/ffffff",
    time: "9/26/2024",
  },
  {
    _id: 74,
    username: "Martica Rangall",
    profile: "http://dummyimage.com/131x100.png/ff4444/ffffff",
    description:
      "curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum",
    emotion: "Akershus",
    image: "http://dummyimage.com/204x100.png/dddddd/000000",
    time: "7/21/2024",
  },
  {
    _id: 75,
    username: "Alicia Bulbrook",
    profile: "http://dummyimage.com/131x100.png/cc0000/ffffff",
    description:
      "dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper",
    emotion: "Akershus",
    image: "http://dummyimage.com/154x100.png/ff4444/ffffff",
    time: "3/29/2025",
  },
  {
    _id: 76,
    username: "Jeana Siaspinski",
    profile: "http://dummyimage.com/144x100.png/5fa2dd/ffffff",
    description:
      "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
    emotion: "Akershus",
    image: "http://dummyimage.com/209x100.png/ff4444/ffffff",
    time: "7/6/2024",
  },
  {
    _id: 77,
    username: "Eula Brugger",
    profile: "http://dummyimage.com/227x100.png/cc0000/ffffff",
    description:
      "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
    emotion: "Akershus",
    image: "http://dummyimage.com/229x100.png/ff4444/ffffff",
    time: "5/4/2024",
  },
  {
    _id: 78,
    username: "Freda Dumini",
    profile: "http://dummyimage.com/122x100.png/dddddd/000000",
    description:
      "eu orci mauris lacinia sapien quis libero nullam sit amet turpis",
    emotion: "Akershus",
    image: "http://dummyimage.com/117x100.png/5fa2dd/ffffff",
    time: "7/17/2024",
  },
  {
    _id: 79,
    username: "Sloan Husby",
    profile: "http://dummyimage.com/220x100.png/5fa2dd/ffffff",
    description:
      "consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices",
    emotion: "Akershus",
    image: "http://dummyimage.com/243x100.png/dddddd/000000",
    time: "4/13/2025",
  },
  {
    _id: 80,
    username: "Dulcinea Hucklesby",
    profile: "http://dummyimage.com/108x100.png/5fa2dd/ffffff",
    description:
      "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo",
    emotion: "Akershus",
    image: "http://dummyimage.com/217x100.png/ff4444/ffffff",
    time: "9/11/2024",
  },
  {
    _id: 81,
    username: "Jorrie Robotham",
    profile: "http://dummyimage.com/105x100.png/ff4444/ffffff",
    description:
      "auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit",
    emotion: "Akershus",
    image: "http://dummyimage.com/110x100.png/dddddd/000000",
    time: "7/12/2024",
  },
  {
    _id: 82,
    username: "Philly Cullagh",
    profile: "http://dummyimage.com/163x100.png/5fa2dd/ffffff",
    description:
      "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
    emotion: "Akershus",
    image: "http://dummyimage.com/133x100.png/5fa2dd/ffffff",
    time: "4/13/2025",
  },
  {
    _id: 83,
    username: "Aurthur Bootton",
    profile: "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
    description:
      "aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis",
    emotion: "Akershus",
    image: "http://dummyimage.com/131x100.png/cc0000/ffffff",
    time: "2/19/2025",
  },
  {
    _id: 84,
    username: "Kirby Crichmer",
    profile: "http://dummyimage.com/225x100.png/dddddd/000000",
    description:
      "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean",
    emotion: "Akershus",
    image: "http://dummyimage.com/162x100.png/ff4444/ffffff",
    time: "1/29/2025",
  },
  {
    _id: 85,
    username: "Paxon Bremmer",
    profile: "http://dummyimage.com/168x100.png/5fa2dd/ffffff",
    description:
      "est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum",
    emotion: "Akershus",
    image: "http://dummyimage.com/107x100.png/ff4444/ffffff",
    time: "10/8/2024",
  },
  {
    _id: 86,
    username: "Spencer Boniface",
    profile: "http://dummyimage.com/234x100.png/cc0000/ffffff",
    description:
      "nulla suspendisse potenti cras in purus eu magna vulputate luctus cum",
    emotion: "Akershus",
    image: "http://dummyimage.com/157x100.png/cc0000/ffffff",
    time: "6/14/2024",
  },
  {
    _id: 87,
    username: "Kenon Deny",
    profile: "http://dummyimage.com/117x100.png/cc0000/ffffff",
    description:
      "magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
    emotion: "Akershus",
    image: "http://dummyimage.com/118x100.png/dddddd/000000",
    time: "5/3/2024",
  },
  {
    _id: 88,
    username: "Roley Sharplin",
    profile: "http://dummyimage.com/191x100.png/cc0000/ffffff",
    description:
      "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
    emotion: "Akershus",
    image: "http://dummyimage.com/247x100.png/5fa2dd/ffffff",
    time: "8/17/2024",
  },
  {
    _id: 89,
    username: "Esdras Scarse",
    profile: "http://dummyimage.com/154x100.png/5fa2dd/ffffff",
    description:
      "lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas",
    emotion: "Akershus",
    image: "http://dummyimage.com/111x100.png/dddddd/000000",
    time: "4/23/2024",
  },
  {
    _id: 90,
    username: "Turner Bushell",
    profile: "http://dummyimage.com/148x100.png/ff4444/ffffff",
    description:
      "felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
    emotion: "Akershus",
    image: "http://dummyimage.com/133x100.png/ff4444/ffffff",
    time: "1/14/2025",
  },
  {
    _id: 91,
    username: "Beret Egell",
    profile: "http://dummyimage.com/199x100.png/5fa2dd/ffffff",
    description:
      "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit",
    emotion: "Akershus",
    image: "http://dummyimage.com/177x100.png/cc0000/ffffff",
    time: "4/12/2025",
  },
  {
    _id: 92,
    username: "Kelcy Camilli",
    profile: "http://dummyimage.com/234x100.png/dddddd/000000",
    description:
      "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat",
    emotion: "Akershus",
    image: "http://dummyimage.com/170x100.png/cc0000/ffffff",
    time: "2/27/2025",
  },
  {
    _id: 93,
    username: "Benetta Myers",
    profile: "http://dummyimage.com/146x100.png/5fa2dd/ffffff",
    description:
      "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
    emotion: "Akershus",
    image: "http://dummyimage.com/175x100.png/ff4444/ffffff",
    time: "10/29/2024",
  },
  {
    _id: 94,
    username: "Kristopher Bareford",
    profile: "http://dummyimage.com/243x100.png/ff4444/ffffff",
    description:
      "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
    emotion: "Akershus",
    image: "http://dummyimage.com/159x100.png/5fa2dd/ffffff",
    time: "11/21/2024",
  },
  {
    _id: 95,
    username: "Marcellina Peachey",
    profile: "http://dummyimage.com/162x100.png/cc0000/ffffff",
    description:
      "praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum",
    emotion: "Akershus",
    image: "http://dummyimage.com/213x100.png/ff4444/ffffff",
    time: "8/4/2024",
  },
  {
    _id: 96,
    username: "Pietro Batchellor",
    profile: "http://dummyimage.com/168x100.png/cc0000/ffffff",
    description:
      "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor",
    emotion: "Akershus",
    image: "http://dummyimage.com/247x100.png/dddddd/000000",
    time: "2/25/2025",
  },
  {
    _id: 97,
    username: "Fritz Akker",
    profile: "http://dummyimage.com/212x100.png/cc0000/ffffff",
    description:
      "quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio",
    emotion: "Akershus",
    image: "http://dummyimage.com/137x100.png/cc0000/ffffff",
    time: "7/27/2024",
  },
  {
    _id: 98,
    username: "Constantine Huntress",
    profile: "http://dummyimage.com/203x100.png/cc0000/ffffff",
    description:
      "scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
    emotion: "Akershus",
    image: "http://dummyimage.com/151x100.png/ff4444/ffffff",
    time: "6/15/2024",
  },
  {
    _id: 99,
    username: "Welby Canon",
    profile: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
    description: "dui proin leo odio porttitor id consequat in consequat ut",
    emotion: "Akershus",
    image: "http://dummyimage.com/197x100.png/dddddd/000000",
    time: "10/28/2024",
  },
  {
    _id: 100,
    username: "Lucienne Joice",
    profile: "http://dummyimage.com/160x100.png/5fa2dd/ffffff",
    description:
      "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis",
    emotion: "Akershus",
    image: "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
    time: "3/27/2025",
  },
];

export default posts;
