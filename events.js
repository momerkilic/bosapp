const romanEvents = [
    {
        id: 1,
        year: "M.Ö. 753",
        title: "Roma'nın Kuruluşu",
        type: "Sosyolojik ve Siyasi",
        era: "👑 Krallık Dönemi (Romulus)",
        description: "Roma efsanesine göre, Savaş Tanrısı Mars'ın çocukları olan ve dişi bir kurt tarafından emzirilerek büyütülen Romulus ve Remus kardeşler, Palatino Tepesi'nde yeni bir şehir kurmaya karar verdiler. Ancak kimin kral olacağı konusunda çıkan kavgada Romulus kardeşini öldürerek Roma'nın ilk kralı oldu. Başlangıçta sadece Tiber Nehri kıyısında küçük, kerpiç evlerden oluşan mütevazı bir köydü. Ancak Romulus'un şehre çevre kabilelerden dışlanmış suçluları, köleleri ve mültecileri kabul etmesiyle burası tam bir sosyolojik kaynaşma potasına dönüştü. Komşu kabile Sabinlerin kadınlarının kaçırılması olayı (Sabin Kadınları Tecavüzü) ile Roma, kendi nüfusunu güvence altına aldı ve bir şehir devleti olma yolunda ilk büyük demografik sıçramasını yaşadı.",
        image: "images/rome_foundation_1777925454544.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Roma+Kuruluşu+Belgeseli"
    },
    {
        id: 2,
        year: "M.Ö. 509",
        title: "Roma Cumhuriyeti'nin Kuruluşu",
        type: "Siyasi",
        era: "🏛️ Erken Cumhuriyet Dönemi (Lucius Junius Brutus)",
        description: "Roma'nın yedinci ve son kralı olan Tarquinius Superbus, zalim bir zorbaydı. Oğlu Sextus Tarquinius'un soylu bir kadın olan Lucretia'ya tecavüz etmesi ve Lucretia'nın onurunu kurtarmak için intihar etmesi, Roma halkı ve soyluları için bardağı taşıran son damla oldu. Lucius Junius Brutus önderliğinde ayaklanan halk, kraliyet ailesini şehirden kovdu. Monarşiye karşı duyulan bu derin nefret sonucunda Roma, devlet yönetimini tek bir kişinin elinden alarak 'Cumhuriyet' (Res Publica - Halkın Meselesi) ilan etti. Yönetim, halk tarafından bir yıllığına seçilen ve birbirlerini veto etme yetkisine sahip iki 'Konsül' ile aristokratlardan oluşan 'Senato'nun eline bırakıldı. Bu sistem, Batı dünyasındaki temsili demokrasilerin atası sayılır.",
        image: "images/roma_cumhuriyet_kurulus_1_1777926098660.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Roma+Cumhuriyeti+Kuruluşu+Belgesel"
    },
    {
        id: 3,
        year: "M.Ö. 494",
        title: "İlk Pleb İsyanı ve Tribunusluk Makamı",
        type: "Sosyolojik ve Ekonomik",
        era: "🏛️ Cumhuriyet Dönemi (Pleb-Patrici Çatışması)",
        description: "Erken Cumhuriyet döneminde tüm siyasi güç soyluların (Patriciler) elindeydi. Sıradan halk olan Plebler ise savaşlarda kan döküyor ancak ganimetten pay alamıyor ve borçları yüzünden köleleştiriliyorlardı. Artan ekonomik kriz ve adaletsizlik karşısında Plebler, benzeri görülmemiş bir eylem gerçekleştirdi: Orduda hizmet etmeyi reddederek Roma'yı terk ettiler ve Kutsal Dağ'a (Mons Sacer) çekildiler (Secessio plebis). Bu ilk sivil itaatsizlik eylemi Patricileri dehşete düşürdü, zira şehri savunacak kimse kalmamıştı. Patriciler boyun eğmek zorunda kaldı ve Pleblerin haklarını savunacak, dokunulmazlığı olan ve Senato kararlarını veto edebilen 'Pleblerin Tribünü' (Tribunus Plebis) makamı kuruldu. Bu, Roma'da sınıf eşitliği mücadelesinin en büyük zaferlerinden biriydi.",
        image: "images/pleb_isyani_1_1777926112683.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Roma+Pleb+İsyanı"
    },
    {
        id: 4,
        year: "M.Ö. 450",
        title: "On İki Levha Kanunları",
        type: "Hukuki ve Sosyolojik",
        era: "⚖️ Cumhuriyet Dönemi (Decemvirler)",
        description: "Hukuk kurallarının yazılı olmaması, Patricilerin (soyluların) yargılamalarda hukuku kendi lehlerine keyfi bir şekilde eğip bükmelerine neden oluyordu. Pleblerin yıllar süren baskıları sonucunda, Roma'nın yasalarını yazılı hale getirmek üzere on kişilik özel bir komisyon (Decemviri) kuruldu. Antik Yunan yasaları (özellikle Solon kanunları) incelenerek hazırlanan bu yasalar, bronz levhalara kazınarak Roma Forumu'na asıldı. On İki Levha Kanunları, aile hukuku, borçlar hukuku, miras ve suçlar gibi pek çok alanı düzenliyordu. Artık herkes haklarını ve cezalarını bilecekti. Bu metin, günümüz modern Avrupa hukuk sistemlerinin (Kıta Avrupası Hukuku) temel taşı kabul edilir ve Roma'nın dünyaya bıraktığı en büyük miraslardan biridir.",
        image: "images/on_iki_levha_1_1777926129824.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Roma+12+Levha+Kanunları"
    },
    {
        id: 5,
        year: "M.Ö. 390",
        title: "Galyalıların Roma'yı Yağmalaması",
        type: "Askeri ve Ekonomik",
        era: "⚔️ Kriz Dönemi (Brennus ve Camillus)",
        description: "Kuzeyden gelen barbar Kelt/Galya kabileleri, şef Brennus komutasında İtalya'ya indi. Allia Nehri Muharebesi'nde Roma ordusunu darmadağın eden Galyalılar, savunmasız kalan Roma şehrine girdiler. Şehri haftalarca yağmalayıp ateşe verdiler; sadece Capitolinus Tepesi'ne sığınan küçük bir Romalı grup direnebildi. Galyalılar ancak kendilerine devasa miktarda altın ödenmesi şartıyla şehri terk ettiler (Efsaneye göre Brennus altını tartarken hile yapmış ve itiraz eden Romalılara kılıcını teraziye atarak 'Vae Victis - Vay Mağlupların Haline' demiştir). Bu büyük utanç ve travma, Romalıların askeri doktrinlerini tamamen değiştirmelerine, esnek maniple sistemini (Lejyonlar) geliştirmelerine ve şehirlerini Servius Surları ile devasa bir korumaya almalarına yol açtı.",
        image: "images/galyali_yagma_1_1777926146591.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Galyalıların+Roma'yı+Yağmalaması"
    },
    {
        id: 6,
        year: "M.Ö. 343 - 290",
        title: "Samnit Savaşları",
        type: "Askeri ve Bölgesel",
        era: "🦅 İtalya'nın Fethi Dönemi",
        description: "Roma, İtalya yarımadasının mutlak hakimi olabilmek için güneydeki savaşçı ve inatçı dağlı kabileler olan Samnitlerle yarım asırdan fazla süren üç büyük savaşa girişti. İkinci Samnit Savaşı'ndaki 'Caudium Geçidi' felaketinde (MÖ 321) Roma ordusu tuzağa düşürülmüş ve Romalı askerler boyunduruk altından geçirilerek büyük bir aşağılanmaya maruz kalmıştı. Ancak Roma'nın en büyük gücü asla pes etmemesiydi. Ordularını modernize eden ve Samnitlerin taktiklerini öğrenen Roma, sonuçta tüm düşmanlarını dize getirdi. Bu savaşlar dizisi, Roma'yı yerel bir şehir devletinden tüm İtalya'yı kontrol eden, bitmek tükenmek bilmeyen bir insan gücü rezervine (Socii - İtalyan Müttefikler) sahip süper bölgesel bir güce dönüştürdü.",
        image: "images/samnit_savaslari_1_1777926160580.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Samnit+Savaşları"
    },
    {
        id: 7,
        year: "M.Ö. 312",
        title: "Via Appia ve Aqua Appia'nın İnşası",
        type: "Altyapı ve Ekonomik",
        era: "🏗️ Yeniden İnşa Dönemi (Appius Claudius)",
        description: "Devlet adamı Appius Claudius Caecus tarafından başlatılan bu devasa bayındırlık projeleri, Roma'nın lojistik ve teknolojik dehasının ilk büyük örnekleridir. 'Yolların Kraliçesi' (Regina Viarum) olarak bilinen Via Appia, Roma'dan güneye Capua'ya (ve daha sonra Brundisium'a) kadar uzanan, taşlarla döşenmiş ve her koşulda askerlerin hızla ilerlemesini sağlayan devasa bir otoyoldu. Aynı dönemde inşa edilen Aqua Appia ise şehrin ilk su kemeri olup, Roma'nın giderek artan nüfusunun temiz su ihtiyacını karşılıyordu. Bu altyapı hamleleri ticareti şaha kaldırdı, orduların intikalini olağanüstü hızlandırdı ve İtalya'nın Roma etrafında entegre olmasını sağlayan bir damar ağı işlevi gördü.",
        image: "images/via_appia_1_1777926180327.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Via+Appia+Roma+Yolları"
    },
    {
        id: 8,
        year: "M.Ö. 287",
        title: "Lex Hortensia'nın Kabulü",
        type: "Sosyolojik ve Siyasi",
        era: "🏛️ Orta Cumhuriyet Dönemi (Diktatör Hortensius)",
        description: "Yüzyıllardır süren Pleb (halk) ve Patrici (soylu) çatışmasının nihai çözümü bu yasayla gerçekleşti. Plebler, yine borç krizleri yüzünden Janiculum Tepesi'ne çekilerek grev yaptıklarında, sorunu çözmesi için Quintus Hortensius diktatör atandı. Çıkarılan 'Lex Hortensia' yasasına göre; Pleb Meclisi'nin (Concilium Plebis) aldığı tüm kararlar, Senato'nun veya Patricilerin onayına gerek kalmaksızın tüm Roma halkı (hem soylular hem de plebler) için bağlayıcı bir yasa haline geldi. Bu siyasi devrim, Roma'yı yasal olarak tam bir demokrasi-oligarşi sentezine dönüştürdü ve iç çekişmeleri bitirerek Roma'nın tüm enerjisini dış fetihlere odaklamasını sağlayan olağanüstü bir sosyal barış dönemi başlattı.",
        image: "images/roman_citizen_forum_1777925500810.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Roma+Lex+Hortensia"
    },
    {
        id: 9,
        year: "M.Ö. 264 - 241",
        title: "Birinci Pön Savaşı",
        type: "Askeri ve Teknolojik",
        era: "⚓ Akdeniz'e Açılma Dönemi",
        description: "Roma, o dönemin denizlere hakim süper gücü ve ticaret imparatorluğu olan Kuzey Afrikalı Kartaca (Fenike kökenliler) ile Sicilya adasının kontrolü için karşı karşıya geldi. Bu savaşa girerken Roma'nın savaş gemisi bile yoktu! Ancak Romalılar karaya vuran bir Kartaca gemisini tersine mühendislikle söküp kopyalayarak aylar içinde devasa bir donanma inşa ettiler. Dahası, gemilerine 'Corvus' (Kuzgun) adını verdikleri, ucunda demir kancalar olan seyyar köprüler ekleyerek deniz savaşını bordalayarak kara savaşına dönüştürdüler. 23 yıl süren çok kanlı ve yıkıcı savaşın sonunda Roma galip geldi, denizlerdeki Kartaca üstünlüğünü kırdı ve ilk denizaşırı eyaleti olan Sicilya'yı elde ederek uluslararası bir imparatorluk olmanın ilk adımını attı.",
        image: "images/birinci_pon_savasi_1_1777926195030.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Birinci+Pön+Savaşı+Belgesel"
    },
    {
        id: 10,
        year: "M.Ö. 218 - 201",
        title: "İkinci Pön Savaşı ve Hannibal",
        type: "Askeri ve Ekonomik Kriz",
        era: "🐘 Büyük Kartaca Savaşı (Hannibal ve Scipio)",
        description: "Antik çağın en büyük askeri dehalarından biri olan Kartacalı general Hannibal Barca, intikam yeminiyle devasa bir ordu ve savaş filleriyle İspanya'dan yola çıkıp geçilemez denilen Alpler'i aşarak İtalya'ya girdi. Trebia, Trasimene Gölü ve özellikle Cannae Muharebesi'nde (MÖ 216) Roma ordularını adeta yok etti; Cannae'de bir günde 50.000'den fazla Romalı asker öldürüldü. İtalya'da 15 yıl boyunca yenilmez bir şekilde dolaşan Hannibal'e karşı Roma büyük bir ekonomik ve demografik çöküşün eşiğine geldi. Ancak Senato ve halk teslim olmayı reddetti. 'Cunctator' (Oyalayıcı) Fabius Maximus'un gerilla taktikleri ve nihayetinde genç komutan Scipio Africanus'un doğrudan Afrika'ya saldırıp Zama Muharebesi'nde Hannibal'i yenmesiyle Roma, Akdeniz'in tartışmasız tek süper gücü olarak bu ölüm kalım savaşından zaferle çıktı.",
        image: "images/hannibal_alpler_1_1777926208990.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Hannibal+İkinci+Pön+Savaşı"
    },
    {
        id: 11,
        year: "M.Ö. 146",
        title: "Kartaca'nın Yıkılışı",
        type: "Askeri ve Jeopolitik",
        era: "🔥 Üçüncü Pön Savaşı (Scipio Aemilianus)",
        description: "İkinci savaştan sonra Kartaca askeri gücünü kaybetse de ekonomik olarak hızla toparlanmış ve Roma için tekrar bir endişe kaynağı olmaya başlamıştı. Yaşlı Senatör Yaşlı Cato'nun her konuşmasını 'Carthago delenda est' (Kartaca yıkılmalıdır!) diye bitirmesiyle alevlenen nefret, Roma'yı asılsız bahanelerle Üçüncü Pön Savaşı'nı başlatmaya itti. Üç yıl süren korkunç bir kuşatmanın ardından Romalılar komutan Scipio Aemilianus önderliğinde şehre girdiler. 700 yıllık devasa metropol 17 gün boyunca yakıldı, yerle bir edildi ve hayatta kalan 50.000 nüfusun tamamı köle olarak satıldı. Efsaneye göre, Roma'nın düşmanlarına karşı hissettiği mutlak yok etme arzusu o kadar büyüktü ki, bir daha orada hiçbir şey bitmesin diye toprağına tuz ekilmiştir.",
        image: "images/kartaca_yikilisi_1_1777926223059.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Kartacanın+Yıkılışı"
    },
    {
        id: 12,
        year: "M.Ö. 146",
        title: "Yunanistan'ın Fethi (Korint'in Yıkılışı)",
        type: "Kültürel ve Askeri",
        era: "🏺 Helenleşme Dönemi (Mummius)",
        description: "Kartaca'nın yıkıldığı aynı yıl, doğuda da tarihi bir dönüşüm yaşandı. Roma'nın hegemonyasına başkaldıran Akha Birliği ezildi ve Yunanistan'ın en zengin şehirlerinden biri olan Korint işgal edilip tamamen yıkıldı. Bu olayla bağımsız Yunan şehir devletleri çağı kesin olarak kapanmış ve Yunanistan bir Roma eyaleti haline gelmiştir. Ancak askeri fethin aksine, kültürel anlamda Yunanistan Roma'yı fethetmiştir. Yunan sanatı, felsefesi, mimarisi, tanrıları ve eğitimi binlerce heykelle birlikte köle öğretmenler aracılığıyla Roma'ya aktarıldı. Ünlü şair Horatius'un dediği gibi: 'Esir alınan Yunanistan, vahşi fatihini esir aldı ve Latium'un köylü sanatsızlığına sanatları getirdi.' Bu olay Greko-Romen medeniyetinin doğuş anıdır.",
        image: "images/yunanistan_fethi_1_1777926257488.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Roma+Yunanistan+Fethi+Korint"
    },
    {
        id: 13,
        year: "M.Ö. 133",
        title: "Tiberius Gracchus'un Toprak Reformu",
        type: "Ekonomik ve Sosyolojik",
        era: "🌾 Populares Dönemi (Gracchus Kardeşler)",
        description: "Fetihlerle gelen devasa zenginlik ve milyonlarca köle, Roma'da derin bir ekonomik uçurum yarattı. Zengin soylular devlet arazilerini ele geçirip kölelerin çalıştığı dev çiftlikler (Latifundia) kurarken, savaşlardan dönen İtalyan köylüleri iflas edip topraksızlaşarak Roma sokaklarında işsiz yığınlar haline geldiler. Halk Tribünü seçilen vizyoner Tiberius Gracchus, bu adaletsizliği çözmek ve Roma'nın asker kaynağını (çünkü sadece toprak sahipleri asker olabiliyordu) yeniden yaratmak için devlet arazilerini yoksul halka dağıtacak radikal bir Toprak Reformu (Lex Agraria) önerdi. Ayrıcalıklarını kaybetmekten korkan yozlaşmış Senatörler, Tiberius'u ve yüzlerce destekçisini Capitol Tepesi'nde sandalyelerle döverek öldürdüler. Bu kanlı olay, Cumhuriyet'in çözülüşünün ve yüzyıllık siyasi şiddet döneminin fitilini ateşledi.",
        image: "images/tiberius_gracchus_1_1777926235488.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Gracchus+Kardeşler+Roma"
    },
    {
        id: 14,
        year: "M.Ö. 121",
        title: "Gaius Gracchus'un Reformları ve Ölümü",
        type: "Ekonomik ve Sosyolojik",
        era: "🌾 Populares Dönemi (Gaius Gracchus)",
        description: "Tiberius'un öldürülmesinden 10 yıl sonra kardeşi Gaius Gracchus aynı yoldan ilerleyerek daha da devrimci reformlara imza attı. Abisinin toprak reformunu sürdürmenin yanı sıra, yoksullara devlet destekli ucuz tahıl satışını başlattı (Lex Frumentaria) ve İtalyan müttefiklere Roma vatandaşlığı verilmesini teklif etti. Bu son teklif hem soyluları hem de ayrıcalıklarını paylaşmak istemeyen sıradan Roma halkını kışkırttı. Senato, tarihinde ilk kez bir acil durum kararnamesi (Senatus Consultum Ultimum) çıkararak devletin güvenliği gerekçesiyle konsüllere yasadışı güç kullanım yetkisi verdi. Çıkan sokak çatışmalarında Gaius ve 3000'den fazla destekçisi katledildi ve cesetleri Tiber nehrine atıldı. Artık siyaset kılıçlarla yapılıyordu.",
        image: "images/roman_senate_1777925468179.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Gaius+Gracchus+Roma"
    },
    {
        id: 15,
        year: "M.Ö. 91 - 88",
        title: "Müttefikler Savaşı (Bellum Sociale)",
        type: "Sosyolojik ve Siyasi",
        era: "🦅 İtalyan Entegrasyonu Dönemi",
        description: "Yüzlerce yıldır Roma ordularında kan döken ve Roma'nın İtalya'yı fethetmesinde başrol oynayan İtalyan müttefikler (Socii), tam Roma vatandaşlık haklarından, ganimetten ve oylamalardan mahrum bırakılıyordu. Haklarının verilmesi için çabalayan Romalı siyasetçi Livius Drusus suikaste kurban gidince İtalyanlar topyekün isyan etti ve 'Italia' adında yeni bir devlet kurup kendi paralarını bastılar. Roma, tarihindeki en kanlı ve tehlikeli savaşlardan birini kendi topraklarında, kendi sistemleriyle eğittiği ordulara karşı vermek zorunda kaldı. Roma orduları savaşta üstünlük sağlasa da, Senato politik bir taviz vererek isyandan vazgeçen tüm İtalyanlara 'Lex Julia' yasasıyla tam Roma vatandaşlığı hakkı tanıdı. Bu olay, Roma'yı bir şehir devleti olmaktan çıkarıp, tüm İtalya'yı kapsayan bir ulus-devlet olma yoluna soktu.",
        image: "images/muttefikler_savasi_1_1777926271732.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Roma+Müttefikler+Savaşı+Social+War"
    },
    {
        id: 16,
        year: "M.Ö. 82 - 79",
        title: "Sulla'nın Diktatörlüğü",
        type: "Siyasi ve Kanlı Kıyım",
        era: "🗡️ Optimatların Baskısı (Sulla)",
        description: "Marius ile girdiği acımasız iç savaşların ardından general Lucius Cornelius Sulla, Roma tarihinde o güne dek yapılmamış bir tabuyu yıktı: Ordusuyla kendi başkenti Roma'ya yürüdü ve şehri işgal etti. Tüm muhaliflerini (Populares destekçilerini) yok etmek için 'Proscriptio' denilen ölüm listeleri yayınladı; bu listelerdeki isimleri öldürenlere ödüller dağıtıldı, binlerce soylu ve senatörün mallarına çökülüp katledildiler. Sulla, Senato'yu güçlendiren ve halk meclislerinin yetkilerini budayan muhafazakar bir anayasa değişikliği yaptıktan sonra şaşırtıcı bir şekilde gücü bırakıp emekli oldu. Ancak bıraktığı miras zehirliydi; Roma ordularının devlete değil komutanlarına sadık olduğu gerçeğini kanıtlamış ve Jül Sezar gibi gelecekteki hırslı komutanlara yol haritası çizmişti.",
        image: "images/sulla_diktator_1_1777926290359.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Sulla+Diktatörlük+Roma"
    },
    {
        id: 17,
        year: "M.Ö. 73 - 71",
        title: "Spartaküs İsyanı",
        type: "Sosyolojik ve Askeri",
        era: "⛓️ Üçüncü Köle Savaşı (Spartaküs, Crassus)",
        description: "Capua'daki bir gladyatör okulundan, mutfak aletleriyle kaçan Trakyalı Spartaküs ve 70 yoldaşı, kısa sürede on binlerce ezilmiş kölenin ve topraksız köylünün katıldığı devasa bir özgürlük ordusuna dönüştü. Roma lejyonlarını defalarca ağır yenilgilere uğratan Spartaküs, yıllarca İtalya'yı baştan başa dolaşarak soyluların kalplerine korku saldı. Sonunda devleti kurtarması için Roma'nın en zengin adamı Marcus Licinius Crassus görevlendirildi. Crassus, acımasız disiplini ('Decimatio' - onuncu askerin öldürülmesi cezası dahil) ve devasa ordusuyla isyancıları köşeye sıkıştırdı. Çıkan son büyük savaşta Spartaküs savaşarak öldü. Crassus, geriye kalan 6.000 esir köleyi, ibret olsun diye Roma'dan Capua'ya kadar uzanan Via Appia yolu boyunca kilometrelerce çarmıha gerdi.",
        image: "images/roman_battle_1777925483255.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Spartaküs+İsyanı+Belgesel"
    },
    {
        id: 18,
        year: "M.Ö. 60",
        title: "Birinci Triumvirlik",
        type: "Siyasi",
        era: "🤝 Triumvirlik Dönemi (Sezar, Pompeius, Crassus)",
        description: "Cumhuriyetin kurumları yozlaşmış ve işlevsizleşmişti. Yükselen üç dev isim; eşsiz karizması ve halk desteğiyle Jül Sezar, doğudaki büyük askeri zaferleriyle Roma'nın en popüler generali Pompeius Magnus ve devasa servetiyle Crassus, aralarındaki rekabeti bir kenara bırakarak gizli bir ittifak kurdular: Birinci Triumvirlik (Üçlü Yönetim). Sezar kızını Pompeius ile evlendirerek bu bağı mühürledi. Bu üç adam, paralarını, nüfuzlarını ve halk gücünü birleştirerek Senato'yu tamamen by-pass ettiler ve Roma siyasetini kendi çıkarlarına göre parsellediler. Bu ittifak, geleneksel Cumhuriyet kurumlarının fiilen bittiğinin ve gücün tamamen oligarkların eline geçtiğinin resmi ilanıydı.",
        image: "images/roman_senate_1777925468179.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Birinci+Triumvirlik+Roma"
    },
    {
        id: 19,
        year: "M.Ö. 49 - 45",
        title: "Jül Sezar'ın İç Savaşı ve Diktatörlüğü",
        type: "Askeri ve Siyasi",
        era: "👑 Diktatörlük Dönemi (Jül Sezar)",
        description: "Crassus'un Partlara karşı ölmesi ve Sezar'ın kızının ölümüyle Pompeius ile Sezar arasındaki bağlar koptu. Senato, Galya'yı (Fransa) fethederek efsanevi bir şöhrete kavuşan Sezar'ın ordusunu dağıtmasını istediğinde, Sezar ordusuyla birlikte yasak sınır olan Rubicon nehrini geçti ve 'Alea iacta est' (Zarlar atıldı) diyerek iç savaşı başlattı. Pompeius'u ve Senato ordularını Pharsalus'ta ezici bir yenilgiye uğratan Sezar, Roma'nın tek hakimi oldu. Kendisini 'Ömür Boyu Diktatör' (Dictator perpetuo) ilan etti; takvimi (Jülyen Takvimi) değiştirdi, borçları sildi, yoksullara toprak dağıttı ve Senato'ya eyaletlerden temsilciler aldı. Ancak krallık heveslisi olduğuna inanan Brutus ve Cassius önderliğindeki bir grup senatör, M.Ö. 44 yılının Mart ayında Sezar'ı senatoda 23 yerinden bıçaklayarak öldürdü.",
        image: "images/roman_senate_1777925468179.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Jül+Sezar+Hayatı+Belgesel"
    },
    {
        id: 20,
        year: "M.Ö. 27",
        title: "Roma İmparatorluğu'nun Kuruluşu",
        type: "Siyasi",
        era: "🏛️ İmparatorluk (Principatus) Dönemi (Augustus)",
        description: "Sezar'ın suikastı Cumhuriyeti kurtaramadı, aksine yeni ve çok daha kanlı bir iç savaş başlattı. Sezar'ın evlatlığı ve varisi genç Octavianus, önce Sezar'ın katillerini yendi, ardından da eski müttefiki Marcus Antonius ve Mısır Kraliçesi Kleopatra'yı Actium Deniz Savaşı'nda (MÖ 31) bozguna uğratarak iç savaşları tamamen bitirdi. Yorgun Roma halkı barış için her şeyi vermeye hazırdı. Octavianus zekice bir hamleyle Cumhuriyet kurumlarını görünüşte korudu ama gerçekte tüm kilit yetkileri kendi elinde topladı. MÖ 27 yılında Senato ona 'Augustus' (Kutsal/Yüce) unvanını verdi. O, kendine sadece 'Princeps' (Birinci Vatandaş) dese de, bu tarih 500 yıllık Roma Cumhuriyeti'nin resmen sona erip, Roma İmparatorluğu'nun (Principatus dönemi) kurulduğu an olarak tarihe kazındı. Ardından iki yüz yıl sürecek olan efsanevi 'Pax Romana' (Roma Barışı) dönemi başladı.",
        image: "images/rome_foundation_1777925454544.png",
        youtubeLink: "https://www.youtube.com/results?search_query=Augustus+Roma+İmparatorluğu"
    }
];
