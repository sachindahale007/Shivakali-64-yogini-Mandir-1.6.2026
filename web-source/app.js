const sections = [
  {
    id: "mandir",
    category: "ज्ञान",
    tone: "yantra",
    icon: "mandir.png",
    symbol: "🕉️",
    keywords: "mandir temple chitrakoot darshan history location address यंत्रात्मक मंदिर शिवकाली",
    title: "मंदिर के बारे में",
    desc: "शिवकाली 64 योगिनी मंदिर की परिकल्पना and दर्शन।",
    intro: "शिवकाली 64 योगिनी मंदिर, चित्रकूट एक ऐसी दिव्य परिकल्पना है जहाँ माँ शिवकाली के साथ 64 योगिनियाँ यंत्रात्मक स्वरूप में प्रतिष्ठित होंगी। यह स्थान bhakti, शक्ति, साधना and सनातन ज्ञान को एक साथ अनुभव कराने के उद्देश्य से निर्मित किया जा रहा है।",
    blocks: [
      {
        title: "मुख्य जानकारी",
        items: [
          { text: "📍 मंदिर का पूर्ण पता", link: "mandir-address" },
          { text: "🗺️ यात्रा मार्ग (कैसे पहुँचें)", link: "mandir-route" },
          { text: "🕙 दर्शन and आरती समय", link: "mandir-timings" }
        ]
      },
      {
        title: "मंदिर की विशेषता",
        items: ["✨ विश्व का प्रथम यंत्रात्मक मंदिर", "💠 64 योगिनियाँ यंत्र रूप में", "🔱 शिव-शक्ति का अद्भुत संगम"]
      },
      {
        title: "दर्शन and मर्यादा",
        text: "मंदिर दर्शन शांत भाव, श्रद्धा and सात्विक आचरण के साथ करें। यहाँ पूजा, दीप दान, प्रसाद, सेवा and विशेष तिथियों की जानकारी आगे जोड़ी जाएगी।"
      }
    ]
  },
  {
    id: "kali-upasana",
    category: "उपासना",
    tone: "kali",
    icon: "kali.png",
    symbol: "🔱",
    title: "काली उपासना",
    desc: "माँ काली की उपासना, मंत्र and पूजा क्रम।",
    intro: "माँ काली की उपासना भय, अज्ञान and नकारात्मकता से मुक्ति की साधना मानी जाती है। श्रद्धा and समर्पण से की गई आराधना साधक को साहस, रक्षा and आंतरिक शक्ति देती है।",
    blocks: [
      { title: "📿 बीज मंत्र", text: "क्रीं" },
      { title: "📖 पाठ and आरती", items: [
        { text: "🔱 माँ काली आरती", link: "kali-aarti-detail" },
        { text: "📜 काली चालीसा", link: "kali-chalisa-detail" },
        { text: "🛡️ काली कवच", link: "kali-kavach-detail" },
        { text: "🧘 काली ध्यान मंत्र", link: "kali-dhyan-detail" },
        { text: "📜 ककारादि काली शतनाम स्तोत्र", link: "kakaradi-kali-shatnam-detail" },
        { text: "🕉️ कालिका अष्टकम", link: "kalika-ashtakam-detail" }
      ]},
      { title: "सरल पूजा क्रम", items: ["स्नान के बाद स्वच्छ दीप जलाएँ", "पुष्प, कुमकुम and प्रसाद अर्पित करें", "माँ काली का ध्यान kar मंत्र जाप करें", "क्षमा प्रार्थना and शांति पाठ से पूर्ण करें"] },
      { title: "🙏 उपासना भाव", text: "माँ काली को करुणा की आद्या शक्ति के रूप में स्मरण करें। उपासना में bhay नहीं, बल्कि माँ के प्रति पूर्ण विश्वास रखें।" }
    ]
  },
  {
    id: "shiv-upasana",
    category: "उपासना",
    tone: "shiv",
    icon: "shiv.png",
    symbol: "🕉️",
    title: "शिव उपासना",
    desc: "महादेव मंत्र, अभिषेक and ध्यान।",
    intro: "भगवान शिव की उपासना शांति, वैराग्य and आत्म-जागरण की भावना से जुड़ी है। शिव आराधना मन को स्थिर and शीतल करती है।",
    blocks: [
      { title: "📿 मुख्य मंत्र", items: ["ॐ नमः शिवाय", "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।"] },
      { title: "📖 आरती and पाठ", items: [
        { text: "🔱 भगवान शिव आरती", link: "shiv-aarti-detail" },
        { text: "📜 शिव चालीसा", link: "shiv-chalisa-detail" },
        { text: "🕉️ शिव रुद्राष्टकम", link: "rudrashtakam-detail" }
      ]},
      { title: "सरल अभिषेक विधि", items: ["शिवलिंग पर जल या पहन चामृत अर्पित करें", "बिल्व पत्र, अक्षत and पुष्प चढ़ाएँ", "ॐ नमः शिवाय का जाप करें", "शांति प्रार्थना से समापन करें"] }
    ]
  },
  {
    id: "das-mahavidya",
    category: "ज्ञान",
    tone: "mahavidya",
    icon: "mahavidya.png",
    symbol: "💠",
    title: "दस महाविद्या",
    desc: "देवी के दस महाशक्ति रूपों का परिचय।",
    intro: "दस महाविद्या देवी तत्त्व की दस गहन धाराएँ हैं। ये रूप साधक को शक्ति, ज्ञान, करुणा and पूर्णता के आयामों से परिचित कराते हैं।",
    blocks: [
      {
        title: "महाविद्या सूची",
        items: [
          { text: "1. काली (विवरण देखें)", link: "kali-upasana" },
          "2. tara", "3. त्रिपुर सुंदरी", "4. भुवनेश्वरी", "5. भैरवी",
          "6. छिन्नमस्ता", "7. धूमावती", "8. बगलामुखी", "9. मातंगी", "10. कमला"
        ]
      },
      { title: "साधना अर्थ", text: "इन रूपों को केवल बाहरी पूजा तक सीमित नहीं समझना चाहिए। ये आत्मचिंतन, विवेक, साहस, वाणी, समृद्धि and मुक्ति के प्रतीक भी हैं।" }
    ]
  },
  {
    id: "yogini",
    category: "ज्ञान",
    tone: "yogini",
    icon: "yogini.png",
    symbol: "🌀",
    title: "64 योगिनी",
    desc: "चौंसठ योगिनी परंपरा and स्वरूप।",
    intro: "64 योगिनी परंपरा शक्ति के बहुआयामी स्वरूपों से जुड़ी एक प्राचीन धारा है। मंदिर में योगिनियाँ यंत्र रूप में विराजमान होंगी।",
    blocks: [
      { title: "यंत्र तत्त्व", text: "योगिनी शक्ति को प्रकृति, दिशा and चेतना से जोड़ा जाता है। ऐप में इनका सरल परिचय दिया जाएगा।" },
      { title: "इस भाग में", items: ["64 योगिनी नामावली", "यंत्रात्मक स्वरूप", "योगिनी मंडल भावना"] },
      { title: "📚 अधिक जानकारी", items: [{ text: "64 योगिनी नामावली (PDF देखें)", link: "books-pdf" }] }
    ]
  },
  {
    id: "nitya-puja",
    category: "उपासना",
    tone: "puja",
    icon: "puja.png",
    symbol: "🪔",
    title: "नित्य पूजा",
    desc: "रोज़ की पूजा, संकल्प and प्रार्थना।",
    intro: "नित्य पूजा रोज़ाना कुछ समय ईश्वर को समर्पित करने का सरल मार्ग है। यह मन को शुद्ध and सकारात्मक बनाती है।",
    blocks: [{ title: "दैनिक क्रम", items: ["🚿 स्नान के बाद स्वच्छ बैठें", "🕯️ दीप and धूप जलाएँ", "🙏 माँ शिवकाली का ध्यान करें", "📿 मंत्र जाप and आरती करें", "🌏 विश्व कल्याण की प्रार्थना करें"] }]
  },
  {
    id: "sadhana",
    category: "उपासना",
    tone: "sadhana",
    icon: "sadhana.png",
    symbol: "🧘",
    title: "साधना",
    desc: "जप, ध्यान and नियम मार्गदर्शन।",
    intro: "साधना bhakti को नियमित अभ्यास में बदलने का मार्ग है। इसका उद्देश्य संकल्प को मजबूत and मन को एकाग्र करना है।",
    blocks: [{ title: "साधना नियम", items: ["⏰ निश्चित समय and स्थान", "📿 guru and इष्ट का स्मरण", "🧘 ध्यान की निश्चित अवधि", "🙏 कृतज्ञता and क्षमा प्रार्थना"] }]
  },
  {
    id: "stotra-aarti",
    category: "सेवा",
    tone: "aarti",
    icon: "stotra.png",
    symbol: "📜",
    title: "स्तोत्र और आरती संग्रह",
    desc: "आरती, चालीसा, कवच and स्तोत्र संग्रह।",
    intro: "भक्तों के लिए प्रमुख आरती, चालीसा and स्तोत्र यहाँ एक ही स्थान पर उपलब्ध हैं।",
    blocks: [
      {
        title: "माँ काली",
        items: [
          { text: "🔱 माँ काली आरती", link: "kali-aarti-detail" },
          { text: "📜 काली चालीसा", link: "kali-chalisa-detail" },
          { text: "🛡️ काली कवच", link: "kali-kavach-detail" },
          { text: "🧘 काली ध्यान मंत्र", link: "kali-dhyan-detail" },
          { text: "📜 ककारादि काली शतनाम स्तोत्र", link: "kakaradi-kali-shatnam-detail" },
          { text: "🕉️ कालिका अष्टकम", link: "kalika-ashtakam-detail" }
        ]
      },
      {
        title: "भगवान शिव",
        items: [
          { text: "🔱 शिव आरती", link: "shiv-aarti-detail" },
          { text: "📜 शिव चालीसा", link: "shiv-chalisa-detail" },
          { text: "🕉️ शिव रुद्राष्टकम", link: "rudrashtakam-detail" }
        ]
      }
    ]
  },
  {
    id: "books-pdf",
    category: "ज्ञान",
    tone: "books",
    icon: "books.png",
    symbol: "📚",
    title: "पुस्तकें और PDF",
    desc: "पूजा पुस्तिका and ग्रंथ संग्रह।",
    intro: "भक्तों के लिए अधिकृत पूजा पुस्तिका and स्तोत्र PDF यहाँ उपलब्ध हैं।",
    blocks: [
      {
        title: "उपलब्ध फाइलें",
        items: [
          { text: "📥 काली पूजा पद्धति (PDF देखें)", pdfUrl: "assets/pdf/kali-puja.pdf" },
          { text: "📥 शिव पूजा पद्धति (PDF देखें)", pdfUrl: "assets/pdf/shiv-puja.pdf" },
          { text: "📥 64 योगिनी नामावली (PDF देखें)", pdfUrl: "assets/pdf/yogini-list.pdf" }
        ]
      }
    ]
  },
  {
    id: "donation",
    category: "सेवा",
    tone: "donation",
    icon: "donation.png",
    symbol: "💳",
    title: "दान और सहयोग",
    desc: "मंदिर सेवा and ऑनलाइन सहयोग।",
    intro: "भक्त अपनी श्रद्धा and सामर्थ्य के अनुसार मंदिर निर्माण and सेवा कार्यों में सहयोग कर सकते हैं।",
    blocks: [
      { title: "सहयोग विकल्प", items: ["🍲 अन्नदान", "🪔 दीप दान", "🏗️ निर्माण सहयोग", "🌸 पूजा सामग्री सेवा"] },
      { title: "📱 ऑनलाइन दान", text: "UPI ID: [यहाँ आपकी UPI ID आएगी] \n\n🙏 आपके सहयोग के लिए धन्यवाद।" }
    ]
  },
  {
    id: "agami-karyakram",
    category: "सेवा",
    tone: "events",
    icon: "events.png",
    symbol: "📅",
    title: "आगामी कार्यक्रम",
    desc: "उत्सव and विशेष पूजा की सूचना।",
    intro: "मंदिर में होने वाले आने वाले उत्सवों and विशेष पूजा कार्यक्रमों की जानकारी यहाँ देखें।",
    blocks: [{ title: "कार्यक्रम", items: ["🌑 अमावस्या विशेष पूजा", "🌺 नवरात्रि अनुष्ठान", "🍲 मासिक भंडारा", "🔱 शिवरात्रि उत्सव"] }]
  },
  {
    id: "gallery",
    category: "सेवा",
    tone: "gallery",
    icon: "gallery.png",
    symbol: "🖼️",
    title: "फोटो गैलरी",
    desc: "मंदिर, दर्शन and कार्यक्रमों की झलकियाँ।",
    intro: "गैलरी में मंदिर निर्माण, दिव्य दर्शन and सेवा कार्यों की तस्वीरें देखी जा सकती हैं।",
    blocks: [
      { title: "श्रेणियाँ", items: ["🏯 मंदिर दर्शन", "🌸 विशेष पूजा", "🏗️ निर्माण कार्य", "🍲 भंडारा and सेवा"] },
      { title: "वीडियो दर्शन", items: [{ text: "📺 यूट्यूब चैनल (Culture and Spirituality)", url: "https://www.youtube.com/@CultureandSpirituality" }] }
    ]
  },
  {
    id: "kali-aarti-detail",
    category: "आरती",
    tone: "kali",
    title: "🔱 माँ काली आरती",
    blocks: [{
      title: "पाठ",
      text: "अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली।\nतेरे ही गुण गावें भारती, ओ मैया हम सब उतारें तेरी आरती॥\n\nतेरे भक्त जनन पर माता भीड़ पड़ी है भारी।\nदानव दल पर टूट पड़ो माँ करके सिंह सवारी॥\n\nसौ-सौ सिंहों से तू बलशाली, अष्ट भुजाओं वाली।\nदुष्टों को तू ही हरने वाली, ओ मैया हम सब उतारें तेरी आरती॥\n\nनहिं मांगते धन और दौलत, न चांदी न सोना।\nहम तो मांगें तेरे चरणों में छोटा सा कोना॥\n\nमाल खजाने भरे हुए हैं, फिर भी तू है खाली।\nसबकी झोली भरने वाली, ओ मैया हम सब उतारें तेरी आरती॥\n\nअम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली।\nतेरे ही गुण गावें भारती, ओ मैया हम सब उतारें तेरी आरती॥"
    }]
  },
  {
    id: "kali-chalisa-detail",
    category: "चालीसा",
    tone: "kali",
    title: "📜 काली चालीसा",
    blocks: [
      {
        title: "॥ दोहा ॥",
        text: "जय काली जगदम्ब जय, हरनि ओघ अघ पुंज।\nवास करहु निज दास के, निशदिन हृदय निकुंज॥\n\nजयati कपाली कालिका, कंकाली सुख दानि।\nकृपा करहु वरदायिनी, निज सेवक अनुमान॥"
      },
      {
        title: "॥ चौपाई ॥",
        text: "जय जय जय काली कंकाली। जय कपालिनी जयति कराली॥\nशंकर प्रिया अपर्णा अम्बा। जय कपर्दिनी जय jagदम्बा॥\n\nआर्या हला अम्बिका माया। कात्यायनी उमा jagजाया॥\nगिरिजा गौरी दुर्गा चण्डी। दाक्षाणायिनी शाम्भवी प्रचंडी॥\n\nपार्वती मंगला भवानी। विश्वकारिणी सती मृडानी॥\nसर्वमंगला शैल नन्दिनी। हेमवती तुम jagत वन्दिनी॥\n\nब्रह्मcharिणी कालरात्रि जय। महारात्रि जय moहरात्रि जय॥\nतुम त्रिमूर्ति रोहिणी कालika। कूष्माण्डा कार्तिका चण्डिका॥\n\nतारा भुवनेश्वरी अनन्या। तुम्हीं छिन्नमस्ता शुचिधन्या॥\nधूमावती षोडशी माता। बगला मातंगी विख्याता॥\n\nतुम भैरवी मातु तुम कमला। रक्तदन्तिका कीरति अमला॥\nशाकम्भरी कौशिकी भीमा। महातमा अग jag की सीमा॥\n\nचन्द्रघण्टिका तुम सावित्री। ब्रह्मवादिनी माँ गायत्री॥\nरूद्राणी तुम कृष्ण पिंगला। अग्निज्वाला तुम सर्वमंगला॥\n\nमेघस्वना तापस्विनि योगिनी। सहस्त्राक्षि तुम अग jag भोगिनी॥\nजलोदरी सरस्वती डाकिनी। त्रिदशेश्वरी अजेय लाकिनी॥\n\nपुष्टि तुष्टि धृति स्मृति शिव दूती। कामाक्षी लज्जा आहूती॥\nमहोदरी कामाक्षि हारिणी। विनायकी श्रुति महा शाकिनी॥\n\nअजा कर्ममोही ब्रह्माणी। धात्री वाराही शर्वाणी॥\nस्कन्द मातु तुम सिंह वाहिनी। मातु सुभद्रा रहहु दाहिनी॥\n\nनाम रूप गुण अमित तुम्हारे। शेष शारदा बरणत हारे॥\nतनु छवि श्यामवर्ण तव माता। नाम कालika jag विख्याता॥\n\nध्यान धरें श्रुति शेष सुरेशा। काल रूप लखि तुमरो भेषा ॥\nकलुआ भैंरों संग तुम्हारे। अरि हित रूप भयानक धारे ॥\n\nसेवक लांगुर रहत agari। चौसठ jogan आज्ञाकारी ॥\nत्रेता में रघुवर हित आई। दशकंधर की सैन नसाई ॥\n\nखेला रण का खेल निराला। भरा मांस-मज्जा से प्याला ॥\nरौद्र रूप लखि दानव भागो। कियौ gavan भवन निज त्यागो ॥\n\nतब ऐसौ तामस चढ़ आयो। स्वजन विजन को भेद भुलायो ॥\nये बालक लखि शंकर आए। राह रोक charnan में धाए ॥\n\nतब मुख जीभ निकर जो आई। यही रूप प्रचलित है माई ॥\nबाढ्यो महिषासुर मद bhari। पीड़ित किए sakal नर- नारी ॥\n\nकरूण पुकार सुनी भक्तन की। पीर मिटावन हित जन- जन की ॥\nतब प्रगटी निज सैन समेता। नाम पड़ा मां महिष विजेता ॥\n\nशुंभ निशुंभ hne छन maahiं। तुम sam jag दूसर कोउ nahiं ॥\nमान मथनहारी खल dal के। sada सहायक bhakt विकल के ॥\n\nदीन विहीन करैं नित seva। पावैं मनवांछित फल meva ॥\nसंकट में जो सुमिरन karhiं। उनके कष्ट मातु तुम harhiं ॥\n\nप्रेम सहित जो कीरति gaavaiं। भव बन्धन सों mukti paavaiं ॥\nकाली चालीसा जो padhhiं। स्वर्गलोक बिनु bandhan chadhhiं ॥\n\nदया दृष्टि हेरौ jagदम्बा। केहि कारण मां कियौ विलंबा ॥\nकरहु मातु bhaktन रखवाली। जयति जयति काली कंकाली ॥\n\nसेवक दीन अनाथ अनारी। bhaktiभाव yuति शरण तुम्हारी ॥"
      },
      {
        title: "॥ समापन दोहा ॥",
        text: "प्रेम सहित जो करे, काली चालीसा पाठ।\nतिनकी पूरन कामना, होय sakal jag ठाठ॥"
      }
    ]
  },
  {
    id: "shiv-aarti-detail",
    category: "आरती",
    tone: "shiv",
    title: "🔱 भगवान शिव आरती",
    blocks: [{
      title: "पाठ",
      text: "जय शिव ओंकारा, प्रभु har शिव ओंकारा।\nब्रह्मा विष्णु सदाशिव अर्द्धांगी धारा॥\n\nएकानन चतुरानन पंचानन राजे।\nहंसानन गरुड़ासन वृषवाहन saje॥\n\nदो bhuj चार चतुर्भुज दस bhuj अति sohe।\nत्रिगुण रूप nirkhता त्रिभुवन jan mohe॥\n\n(भगवान शिव की यह दिव्य आरती ब्रह्मांड के रचयिता and संहारक महादेव को समर्पित है।)"
    }]
  },
  {
    id: "shiv-chalisa-detail",
    category: "चालीसा",
    tone: "shiv",
    title: "📜 शिव चालीसा",
    blocks: [{
      title: "पाठ",
      text: "जय गणेश गिरिजा सुवन, मंगल मूल सुजान।\nकहत अयोध्यादास तुम, देहु अभय वरदान॥\n\nजय girja पति दीन दयाला, सदा करत संतन प्रतिपाला।\nभाल चंद्रमा sohat neeke, कानन कुंडल नागफनी के॥\n\nअंग गौर शिर गंग बहाये, मुण्डमाल तन क्षार लगाये।\nवस्त्र खाल बाघम्बर sohe, छवि को देख नाग मुनि mohe॥\n\n(शिव चालीसा का जाप भक्तों को शांति and महादेव की कृपा प्रदान करता है।)"
    }]
  },
  {
    id: "rudrashtakam-detail",
    category: "स्तोत्र",
    tone: "shiv",
    title: "🕉️ शिव रुद्राष्टकम",
    blocks: [{ title: "पाठ", text: "नमामीशमीशान निर्वाणरूपं। विभुं व्यापकं ब्रह्मवेदस्वरूपं॥\nनिजं निर्गुणं निर्विकल्पं निरीहं। चिदाकाशमाकाशवासं भजेऽहं॥\n\nनिराकारमोंकारमूलं तुरीयं। गिराज्ञानगोतीतमीशं गिरीशं।\nकरालं महाकालकालं कृपालं। गुणागारसंसारपारं नतोऽहं॥\n\n(यह स्तोत्र भगवान शिव के रुद्र स्वरूप की वंदना करता है।)" }]
  },
  {
    id: "kali-kavach-detail",
    category: "कवच",
    tone: "kali",
    title: "🛡️ काली कवच",
    blocks: [
      { title: "विनियोग", text: "अस्य श्रीकालीकवचस्य भैरव ऋषिः, गायत्री छन्दः, श्रीकाली देवता, ह्रीं बीजं, हुं शक्तिः, क्रीं कीलकं, मनोभिलषितसिद्धये पाठे विनियोगः।" },
      { title: "कवच", text: "ॐ शिरो मे कालिका पातु, कंठं मे पातु कालिका।\nहृदयं पातु मे काली, सर्वतः पातु कालिका॥\n\nनेत्रौ करालवदना, कर्णौ पातु कपालिनी।\nनासिकां चण्डिका पातु, मुखं पातु सुन्दरी॥\n\nजिह्वां मे दक्षिणा पातु, दन्तान् पातु महेश्वरी।\nचिबुकं पातु मे रौद्री, कपोलौ कालभैरवी॥\n\nग्रीवां मे तु कराली च, स्कन्धौ पातु कपर्दिनी।\nबाहू मे चण्डिका पातु, हस्तौ पातु शुभप्रदा॥\n\nस्तनौ मे पातु मुण्डाभा, कुक्षिं मे पातु भैरवी।\nनाभिं मे चण्डिका पातु, कटिं मे पातु सुन्दरी॥\n\nऊरू मे पातु विकटा, जानुनी रक्तदन्तिका।\nजंघे मे पातु भीमा च, guल्फौ पातु भयावहा॥\n\nपादौ मे पातु विकटा, सर्वाङ्गं मे सदावतु।\nकाली कवचमिदं पुण्यं, सर्वसिद्धिकरं परम्॥" }
    ]
  },
  {
    id: "kali-dhyan-detail",
    category: "ध्यान",
    tone: "kali",
    title: "🧘 काली ध्यान मंत्र",
    blocks: [{
      title: "ध्यान मंत्र",
      text: "ॐ करालवदनां घोरां मुक्तकेशीं चतुर्भुजाम्।\nकालिकां दक्षिणां दिव्यां मुण्डमालाविभूषिताम्॥\n\nसद्यश्छिन्नशिरः खड्गवामाधोर्ध्वकराम्बुजाम्।\nअभयं वरदं चैव दक्षिणोर्ध्वाधः पाणिंकाम्॥\n\n(अर्थ: भयानक मुख वाली, बिखरे बालों वाली, चार भुजाओं वाली, मुण्डमाला धारण करने वाली दिव्य दक्षिणा कालिका का मैं ध्यान करता हूँ। जिनके बाएं हाथों में कटा हुआ सिर and खड्ग है, and दाएं हाथ अभय and वरद मुद्रा में हैं।)"
    }]
  },
  {
    id: "kakaradi-kali-shatnam-detail",
    category: "स्तोत्र",
    tone: "kali",
    title: "📜 ककारादि काली शतनाम स्तोत्र",
    blocks: [
      {
        title: "॥ प्रस्तावना ॥",
        text: "श्रीदेव्युवाच-\nनमस्ते पार्वतीनाथ विश्वनाथ दयामय ।\nज्ञानात् परतरं नास्ति श्रुतं विश्वेश्वर प्रभो ॥ १॥\n\nदीनवन्धो दयासिन्धो विश्वेश्वर जगत्पते ।\nइदानीं श्रोतुमिच्छामि गोप्यं परमकारणम् ।\nरहस्यं कालिकायश्च तारायाश्च सुरोत्तम ॥ २॥\n\nश्रीशिव उवाच-\nरहस्यं किं वदिष्यामि पञ्चवक्त्रैर्महेश्वरी ।\nजिह्वाकोटिसहस्रैस्तु वक्त्रकोटिशतैरपि ॥ ३॥\n\nवक्तुं न शक्यते तस्य माहात्म्यं वै कथञ्चन ।\nतस्या रहस्यं गोप्यञ्च किं न जानासि शङ्करी ॥ ४॥\n\nस्वस्यैव चरितं वक्तं समर्था स्वयमेव हि ।\nअन्यथा नैव देवेशि ज्ञायते तत् कथञ्चन ॥ ५॥\n\nकालिकायाः शतं नाम नाना तन्त्रे त्वया श्रुतम् ।\nरहस्यं गोपनीयञ्च तत्रेऽस्मिन् जगदम्बिके ॥ ६॥"
      },
      {
        title: "॥ शतनाम स्तोत्रम् ॥",
        text: "(ॐ) करालवदना काली कामिनी कमला कला ।\nक्रियावती कोटराक्षी कामाक्ष्या कामसुन्दरी ॥ ७॥\n\nकपाला च कराला च काली कात्यायनी कुहुः ।\nकङ्काला कालदमना करुणा कमलार्च्चिता ॥ ८॥\n\nकादम्बरी कालहरा कौतुकी कारणप्रिया ।\nकृष्णा कृष्णप्रिया कृष्णपूजिता कृष्णवल्लभा ॥ ९॥\n\nकृष्णापराजिता कृष्णप्रिया च कृष्णरूपिनी ।\nकालिका कालरात्रीश्च कुलजा कुलपण्डिता ॥ १०॥\n\nकुलधर्मप्रिया कामा काम्यकर्मविभूषिता ।\nकुलप्रिया कुलरता कुलीनपरिपूजिता ॥ ११॥\n\nकुलज्ञा कमलापूज्या कैलासनगभूषिता ।\nकूटजा केशिनी काम्या कामदा कामपण्डिता ॥ १२॥\n\nकरालास्या च कन्दर्पकामिनी रूपशोभिता ।\nकोलम्बका कोलरता केशिनी केशभूषिता ॥ १३॥\n\nकेशवस्यप्रिया काशा काश्मीरा केशवार्च्चिता ।\nकामेश्वरी कामरूपा कामदानविभूषिता ॥ १४॥\n\nकालहन्त्री कूर्ममांसप्रिया कूर्मादिपूजिता ।\nकोलिनी करकाकारा करकर्मनिषेविणी ॥ १५॥\n\nकटकेश्वरमध्यस्था कटकी कटकार्च्चिता ।\nकटप्रिया कटरता कटकर्मनिषेविणी ॥ १६॥\n\nकुमारीपूजनरता कुमारीगणसेविता ।\nकुलाचारप्रिया कौलप्रिया कौलनिषेविणी ॥ १७॥\n\nकुलीना कुलधर्मज्ञा कुलभीतिविमर्द्दिनी ।\nकालधर्मप्रिया काम्य-नित्या कामस्वरूपिणी ॥ १८॥\n\nकामरूपा कामहरा काममन्दिरपूजिता ।\nकामागारस्वरूपा च कालाख्या कालभूषिता ॥ १९॥\n\nक्रियाभक्तिरता काम्यानाञ्चैव कामदायिनी ।\nकोलपुष्पम्बरा कोला निकोला कालहान्तरा ॥ २०॥\n\nकौषिकी केतकी कुन्ती कुन्तलादिविभूषिता ।\nइत्येवं श‍ृणु चार्वङ्गि रहस्यं सर्वमङ्गलम् ॥ २१॥"
      },
      {
        title: "॥ फलश्रुतिः ॥",
        text: "यः पठेत् परया भक्त्या स शिवो नात्र संशयः ।\nशतनामप्रसादेन किं न सिद्धति भूतले ॥ २२॥\n\nब्रह्मा विष्णुश्च रुद्रश्च वासवाद्या दिवौकसः ।\nरहस्यपठनाद्देवि सर्वे च विगतज्वराः ॥ २३॥\n\nत्रिषु लोकेशु विश्वेशि सत्यं गोप्यमतः परम् ।\nनास्ति नास्ति महामाये तन्त्रमध्ये कथञ्चन ॥ २४॥\n\nसत्यं वचि महेशानि नातःपरतरं प्रिये ।\nन गोलोके न वैकुण्ठे न च कैलासमन्दिरे ॥ २५॥\n\nरात्रिवापि दिवाभागे यदि देवि सुरेश्वरी ।\nप्रजपेद् भक्तिभावेन रहस्यस्तवमुत्तमम् ॥ २६॥\n\nशतनाम प्रसादेन मन्त्रसिद्धिः प्रजायते ।\nकुजवारे चतुर्द्दश्यां निशाभागे जपेत्तु यः ॥ २७॥\n\nस कृती सर्वशास्त्रज्ञः स कुलीनः सदा शुचिः ।\nस कुलज्ञः स कालज्ञः स धर्मज्ञो महीतले ॥ २८॥\n\nरहस्य पठनात् कोटि-पुरश्चरणजं फलम् ।\nप्राप्नोति देवदेवेशि सत्यं परमसुन्दरी ॥ २९॥\n\nस्तवपाठाद् वरारोहे किं न सिद्धति भूतले ।\nअणिमाद्यष्टसिद्धिश्च भवेत्येव न संशयः ॥ ३०॥\n\nरात्रौ बिल्वतलेऽश्वथ्थमूलेऽपराजितातले ।\nप्रपठेत् कालिका-स्तोत्रं यथाशक्त्या महेश्वरी ॥ ३१॥\n\nशतवारप्रपठनान्मन्त्रसिद्धिर्भवेद्ध्रूवम् ।\nनानातन्त्रं श्रुतं देवि मम वक्त्रात् सुरेश्वरी ॥ ३२॥\n\nमुण्डमालामहामन्त्रं महामन्त्रस्य साधनम् ।\nभक्त्या भगवतीं दुर्गां दुःखदारिद्र्यनाशिनीम् ॥ ३३॥\n\nसंस्मरेद् यो जपेद्ध्यायेत् स मुक्तो नात्र संशय ।\nजीवन्मुक्तः स विज्ञेयस्तन्त्रभक्तिपरायणः ॥ ३४॥\n\nस साधको महाज्ञानी यश्च दुर्गापदानुगः ।\nन च bhaktiर्न वाहbhaktiर्न muktiनगनन्दिनि ॥ ३५॥\n\nविना दुर्गां jagद्धात्री निष्फलं जीवनं भभेत् ।\nशक्तिमार्गरतो भूत्वा योहन्यमार्गे प्रधावति ॥ ३६॥\n\nन च शाक्तास्तस्य वक्त्रं परिपश्यन्ति शङ्करी ।\nविना तन्त्राद् विना मन्त्राद् विना यन्त्रान्महेश्वरी ॥ ३७॥\n\nन च bhuktiश्च muktiश्च जायते वरवर्णिनी ।\nयथा guruर्महेशानि यथा च परमो guruः ॥ ३८॥\n\nतन्त्रावक्ता guruः साक्षाद् यथा च ज्ञानदः शिवः ।\nतन्त्रञ्च तन्त्रवक्तारं निन्दन्ति तान्त्रीकीं क्रियाम् ॥ ३९॥\n\nये जना भैरवास्तेषां मांसास्थिचर्वणोद्यताः ।\nअतएव च तन्त्रज्ञं स निन्दन्ति कदाचन ।\nन हस्तन्ति न हिंसन्ति न वदन्त्यन्यथा बुधा ॥ ४०॥\n\n॥ इति मुण्डमालातन्त्रेऽष्टमपटले देवीश्वर संवादे\nकालीशतनामस्तोत्रं सम्पूर्णम् ॥"
      }
    ]
  },
  {
    id: "kalika-ashtakam-detail",
    category: "अष्टकम",
    tone: "kali",
    title: "🕉️ कालिका अष्टकम (Full Version)",
    blocks: [
      {
        title: "ध्यानम्",
        text: "गलदरक्तमुण्डावलीकण्ठमाला\nमहाघोररावा सुदंष्ट्रा कराला।\nविवस्त्रा श्मशानालया मुक्तकेशी\nमहाकालकामाकुला कालिकेयम्।।1।।\n\nभुजे वामयुग्मे शिरोSसिं दधाना\nवरं दक्षयुग्मेSभयं वै तथैव।\nसुमध्याSपि तुंगस्तनाभारनम्रा\nलसदरक्तसृक्कद्वया सुस्मितास्या।।2।।\n\nशवद्वन्द्वकर्णावतंसा सुकेशी\nलसत्प्रेतपाणिं प्रयुक्तैककाञ्ची।\nशवाकारमञ्चाधिरूढ़ा शिवाभि-\nश्चतुर्दिक्षुशब्दायमानाSभिरेजे।।3।।"
      },
      {
        title: "स्तुति:",
        text: "विरञ्च्यादिदेवास्त्रयस्ते गुणांस्त्रीन्\nसमाराध्य कालीं प्रधाना बभूवु:।\nअनादिं सुरादिं मखादिं भवादिं\nस्वरूपं त्वदीयं न विन्दन्ति देवा:।।4।।\n\nजगन्मोहनीयं तु वाग्वादिनीयं\nसुहृत्पोषिणीशत्रुसंहारणीयम्।\nवचस्तम्भनीयं किमुच्चाटनीयं\nस्वरूपं त्वदीयं न विन्दन्ति देवा:।।5।।\n\nइयं स्वर्गदात्री पुन: कल्पवल्ली\nमनोजांस्तु कामान् यथार्थं प्रकुर्यात्।\nतथा ते कृतार्था भवन्तीति नित्यं\nस्वरूपं त्वदीयं न विन्दन्ति देवा:।।6।।\n\nसुरापानमत्ता सुभक्तानुरक्ता\nलसत्पूतचित्ते सदाविर्भवत्ते।\nजपध्यानपूजासुधाधौतपंका\nस्वरूपं त्वदीयं न विन्दन्ति देवा:।।7।।\n\nचिदानन्दकन्दं हसन् मन्दमन्दं\nशरच्चन्द्रकोटिप्रभापुञ्जबिम्बम् ।\nमुनीनां कवीनां हृदि द्योतयन्तं\nस्वरूपं त्वदीयं न विन्दन्ति देवा:।।8।।\n\nमहामेघकाली सुरक्तापि शुभ्रा\nकदाचिद् विचित्राकृतिर्योगमाया।\nन बाला न वृद्धा न कामातुरापि\nस्वरूपं त्वदीयं न विन्दन्ति देवा:।।9।।\n\nक्षमस्वापराधं महागुप्तभावं\nमया लोकमध्ये प्रकाशीकृतं यत् ।\nतव ध्यानपूतेन चापल्यभावात्\nस्वरूपं त्वदीयं न विन्दन्ति देवा:।।10।।"
      },
      {
        title: "फलश्रुति:",
        text: "यदि ध्यानयुक्तं पठेद् यो मनुष्य-\nस्तदा सर्वलोके विशालो भवेच्च।\nगृहे चाष्टसिद्धिर्मृते चापि मुक्ति:\nस्वरूपं त्वदीयं न विन्दन्ति देवा:।।11।।\n\n।।इति श्रीमच्छंकराचार्यविरचितं श्रीकालिकाष्टकं सम्पूर्णम्।।"
      }
    ]
  },
  {
    id: "mandir-address",
    category: "मंदिर",
    tone: "yantra",
    title: "📍 मंदिर का पूर्ण पता",
    blocks: [{ title: "विवरण", text: "📍 शिवकाली 64 योगिनी मंदिर, ग्राम - [gram का नाम], चित्रकूट, उत्तर प्रदेश / मध्य प्रदेश।\n\n🧭 नेविगेशन: गूगल मैप लोकेशन शीघ्र अपडेट की जाएगी। \n\n🚩 मंदिर चित्रकूट रेलवे स्टेशन से लगभग [दूरी] किमी की दूरी पर स्थित है।" }]
  },
  {
    id: "mandir-route",
    category: "मंदिर",
    tone: "yantra",
    title: "🗺️ यात्रा मार्ग",
    blocks: [
      { title: "🚆 रेल मार्ग", items: ["निकटतम रेलवे स्टेशन: चित्रकूट धाम कर्वी (CKTD)", "प्रयागराज, सतना and delhi से सीधी ट्रेनें उपलब्ध हैं।"] },
      { title: "🚌 सड़क मार्ग", items: ["सतना, प्रयागराज and झाँसी से सीधी bus सेवा उपलब्ध है।", "चित्रकूट bus स्टैंड से ऑटो या प्राइवेट टैक्सी मिल सकती है।"] }
    ]
  },
  {
    id: "mandir-timings",
    category: "मंदिर",
    tone: "yantra",
    title: "🕙 दर्शन and आरती समय",
    blocks: [{ title: "समय सारणी", items: ["🌅 प्रातः दर्शन: 6 AM - 12 PM", "🌇 संध्या दर्शन: 4 PM - 8 PM", "🔔 सुबह की आरती: 7:00 AM", "🔔 संध्या आरती: 7:30 PM"] }]
  }
];

const categoryMap = [
  { id: "upasana", title: "🔱 उपासना", desc: "पूजा, जप and साधना", sections: ["kali-upasana", "shiv-upasana", "nitya-puja", "sadhana"] },
  { id: "gyan", title: "📚 ज्ञान", desc: "मंदिर, महाविद्या and योगिनी", sections: ["mandir", "das-mahavidya", "yogini", "books-pdf"] },
  { id: "seva", title: "💳 सेवा", desc: "आरती, गैलरी and दान", sections: ["stotra-aarti", "gallery", "donation", "agami-karyakram"] }
];

const homeView = document.querySelector("#homeView");
const detailView = document.querySelector("#detailView");
const menuGrid = document.querySelector("#menuGrid");
const detailNumber = document.querySelector("#detailNumber");
const detailTitle = document.querySelector("#detailTitle");
const detailIntro = document.querySelector("#detailIntro");
const detailContent = document.querySelector("#detailContent");
const quickButtons = document.querySelectorAll(".bottom-bar button");
const navHome = document.querySelector("#navHome");
const navCategories = document.querySelector("#navCategories");
const searchInput = document.querySelector("#searchInput");

let currentQuery = "";
let isRestoringHistory = false;

function sectionById(id) { return sections.find(s => s.id === id); }

function showHome() {
  detailView.classList.remove("active");
  homeView.classList.add("active");
  quickButtons.forEach(b => b.classList.remove("active"));
  navHome.classList.add("active");
  if (!isRestoringHistory) updateHistory({ view: "home" });
  renderMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCategories() {
  detailTitle.textContent = "श्रेणियाँ";
  detailIntro.textContent = "विषयों को श्रेणियों में चुनें।";
  detailContent.innerHTML = categoryMap.map(renderCategoryPanel).join("");
  homeView.classList.remove("active");
  detailView.classList.add("active");
  quickButtons.forEach(b => b.classList.remove("active"));
  navCategories.classList.add("active");
  if (!isRestoringHistory) updateHistory({ view: "categories" });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.showSection = function(id) {
  const s = sectionById(id);
  if (!s) return;
  detailNumber.textContent = s.category;
  detailTitle.textContent = s.title;
  detailIntro.textContent = s.intro || "";
  detailContent.innerHTML = s.blocks.map(renderBlock).join("");
  homeView.classList.remove("active");
  detailView.classList.add("active");
  quickButtons.forEach(b => b.classList.remove("active"));
  if (!isRestoringHistory) updateHistory({ view: "section", sectionId: id });
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function renderMenu() {
  const filtered = sections.filter(s => {
    const isMain = ["mandir", "kali-upasana", "shiv-upasana", "das-mahavidya", "yogini", "nitya-puja", "sadhana", "stotra-aarti", "books-pdf", "donation", "agami-karyakram", "gallery"].includes(s.id);
    if (!currentQuery) return isMain;
    return (s.title + (s.keywords || "") + s.desc).toLowerCase().includes(currentQuery.toLowerCase());
  });
  menuGrid.innerHTML = filtered.length ? filtered.map(renderTile).join("") : `<p class="empty-state">कोई परिणाम नहीं मिला।</p>`;
}

function renderTile(s) {
  const icon = s.icon ? `assets/${s.icon}` : `assets/shivakali-hero.png`;
  return `
    <button class="menu-tile" data-section="${s.id}">
      <span class="thumb tone-${s.tone || 'default'}">
        <span class="thumb-symbol">${s.symbol || '🕉️'}</span>
        <img src="${icon}" onload="this.style.opacity='1'" onerror="this.classList.add('hide')">
      </span>
      <span>
        <span class="menu-title">${s.title}</span>
        <span class="menu-desc">${s.desc}</span>
      </span>
    </button>`;
}

function renderCategoryPanel(cat) {
  const links = cat.sections.map(id => {
    const s = sectionById(id);
    return s ? `<li><button class="category-link" data-section="${s.id}">${s.title}</button></li>` : "";
  }).join("");
  return `<article class="detail-panel"><h3>${cat.title}</h3><ul>${links}</ul></article>`;
}

function renderBlock(block) {
  const content = block.items
    ? `<ul>${block.items.map(item => {
        if (typeof item === "object") {
          if (item.pdfUrl) return `<li><button class="item-link" onclick="window.open('${item.pdfUrl}', '_system')">${item.text}</button></li>`;
          if (item.url) return `<li><button class="item-link" onclick="window.open('${item.url}', '_system')">${item.text}</button></li>`;
          if (item.link) return `<li><button class="item-link" data-section="${item.link}">${item.text}</button></li>`;
        }
        return `<li>${item}</li>`;
      }).join("")}</ul>`
    : `<p>${block.text}</p>`;
  return `<article class="detail-panel"><h3>${block.title}</h3>${content}</article>`;
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-section]");
  if (btn) window.showSection(btn.dataset.section);
});

window.handleSearchInput = function(v) { currentQuery = v; renderMenu(); };
function updateHistory(state) { history.pushState(state, "", ""); }

window.addEventListener("popstate", (e) => {
  isRestoringHistory = true;
  const s = e.state || { view: "home" };
  if (s.view === "section") window.showSection(s.sectionId);
  else if (s.view === "categories") showCategories();
  else showHome();
  isRestoringHistory = false;
});

quickButtons.forEach(b => b.addEventListener("click", () => b.id === "navCategories" ? showCategories() : showHome()));

document.addEventListener("deviceready", () => {
  const app = window.Capacitor?.Plugins?.App;
  if (app) app.addListener("backButton", () => {
    if (history.state && history.state.view !== "home") window.history.back();
    else app.exitApp();
  });
});

renderMenu();
history.replaceState({ view: "home" }, "", "");
