
var List = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]



Page({
  data: {
    one: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    two: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    three: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    four: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    five: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    six: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    seven: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "0", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    Rfirst: "1th",
    Rsecond: "2nd",
    Rthird: "3rd",
    Rfourth: "4th",
    Rfifth: "5th",
    Rsixth: "6th",
    Rseventh: "7th",

  },

  onLoad:function(){
    // this.setData({
    //   Rfirst: this.first[this.firstIndex]
    // });
    wx.setNavigationBarTitle({
      title: 'ValveCode_Checker',
    })

  },

  first: ['Aluminium ', 'Bronze or Brass li ', 'Cast Iron or Ductile Ircm铸铁或球膜铸铁 ', 'Ductile-Iron or Malleable Iron 球膜 铸铁或可锻铸铁 ', 'Low Temperature CS 低温碳钢 ', 'CS碳钢 ', ' ', 'Graphite 石墨 ', ' ', ' ', ' ', 'Fibreglass Reinforced 玻璃纤维增强 ', 'Monel 蒙乃尔 ', 'Nickel 儀 ', ' ', ' ', 'Alloy 20 20号合金 ', '304SSor304LSS ', ' ', '316 SS or316LSS ', ' ', 'Hastelloy B ', ' ', ' ', ' ', ' ', ' ', '1-1/4%Cr-1/2%Mo ', '2-1/4%Cr-1%Mo ', '3-1/2% Nickel ', 'Hastelloy C ', '5%Cr-1/3%Mo', 'Titanium ft ', 'PVDF ', 'PVC ', 'CPVC '],
  second: ['Gate阐阀 ', 'Globe截止阀 ', 'Check-Swing 旋启式 止回阀 ', 'Plug-Sleeve Type ', 'Plug Lubricated- ', 'Bail Std Port 标准球阀 ', 'Diaphragm 隔膜阀 ', 'Butterfly 蝶阀 ', '3-Way Safety Selector ', 'Plug-Eccentric ', 'Ball-Rising Stem ', 'Angle or Y-Type ', 'Check-Piston 拄塞式 止回阀 ', 'Needle针迆阀 ', 'Check-Bal]球型止回 阀 ', 'Gauge-Pressure ', 'Ram Type-Drain ', 'Non-Re turn Globe 截止止回阀 ', 'Flush-Bottom Tank ', 'Check-Excess Flow ', 'In-line Spring Check ', 'Knife Gate 刀板闸阀 ', 'Ball Top Entry ', 'Line Blind ', 'Jacketed Ball 夹套球阀 ', 'Ball-Short Body 短型球阀 ', ' ', 'Ball Trunnion Mounted ', 'Ball-Full Port 直通式球阈 ', 'Check Tilting Disc ', 'Piston Check (No Spring)柱塞式止回阀 ', 'Plug-3-Way 三通旋塞阀 ', 'Check-Wafer, Dual plate双板对夹式止 回阀 ', 'B utt erfly- Bi direc- ti on al Dead End ', 'Check-Ball (No Spring)球型止回阀 ', 'Non Standard '],
  third: ['25 Lb ', '50 Lb ', '75 Lb ', '100Lb ', '125 Lb ', '150 Lb ', '175 Lb ', '200 Lb ', ' ', '250 Lb ', '300 Lb ', '400 Lb ', '600 Lb ', '800 Lb ', 'No Rating ', '900 Lb ', '1500 Lb ', '2000 Lb ', '2500 Lb ', '3000 Lb ', '6000 Lb ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  fourth: ['Threaded-Fem NPT 内 螺纹 ', 'MaleNPTxFemNPT 阳螺纹X阴螺纹 ', 'Socket Weld 承插焊 ', 'Soldered ', 'Butt Welded 对焊 ', 'Flanged RF 法兰端. ', 'Male SWxFem NPT ', 'Hanged FF法兰端 ', ' ', 'Flanged RF, 125RMS ', 'Mechanical Joint ', 'Lug Style凸耳式 ', 'Long Body-Male SW x Fem NPT ', 'Tube, Compression 卡套 式连接 ', ' ', 'Ring Type Joint ', 'Mech Joint x Flanged FF ', 'Double Flanged, RF 法兰端面 ', 'Lens Ring ', 'Victaulic Grooved ', 'Hubs ', 'Fem SW x Fem NPT ', 'Wafer Body ', 'Clamped Ends ', 'Small Tongue & Groove ', 'Large Tongue & Groove ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  fifth: ['Resilient Seated 弾 牲阀座 ', 'Bronze青铜 ', 'Cast Iron 铸铁 ', 'Duct Iron ', '33Cr I/2 HF Welded Bonnet ', 'Carbon Steel 碳钢 ', '13Cr ]/2 HF w/o Welded Bonnet ', ' ', ' ', ' ', ' ', 'Press Seal Bonnet ', 'Monel蒙乃尔 ', 'Nickel 镍 ', ' ', 'Hastelloy C ', 'Alloy 20 ', '304 SS ', '303 SS ', '316 SS ', 'Hastelloy & Monel ', 'Hastelloy B ', '316 SS / PFA Sleeve ', 'Hard Face Seat ', 'Lined ', 'Zirconium ', 'Same as Body ', '17-4PH SS Shaft ', '13Cr ', '3-1/2 Nickel ', ' ', '5Cr - 1 / 2 Mo', 'Titanium ft ', 'Hard Face Seat & Disc 硬面密封 ', 'Mfi - Std ', '13Cr 1 / 2Hard Faced Welded in Seat Rins '],
  sixth: ['FEP Lined 衬 PFA ', 'PEEK Seats ', 'Glass Lined玻璃衬里 ', 'Metal Seats金属阀座 ', 'Epoxy Lined环氧衬里 ', 'Fire Safe Design 防火 要求 ', 'Kynar Lined ', 'Vinyl Ester Lined ', 'Double Pack-Bleed ', 'Polyester Lined ', 'PFA/PTFE Lined ', 'Tefe] (ETFE) Lined 聚四氟乙烯衬里 ', 'Saran Lined ', 'Vented Ball ', 'Long Body ', 'Polypropylene Lined ', 'Furan Lined ', 'High Temperature Packing & Gasket ', 'Jacketed ', 'Rubber Lined ', 'Underwriters Approved ', 'Deep Stuffing Box & Lantern Ring. Vacuum Service ', 'Cleaned & Packed for Chlorine ', 'Cleaned & Packed for Oxygen ', 'Category M ', 'Graphite Packing-316/Graphite or Soft Iron Bonnet Gasket ', ' ', 'Double Block & Bleed ', 'EXT Stem for Buried Service ', 'PTFE Pacldng & Gasket ', 'Bellows Seal ', 'FDA-3A Design ', 'Weatherproof Gear Enclosure ', '3-Port Design ', '2-Port Design ', '4-Port Design '],
  seventh: [' ', ' ', ' ', ' ', 'Extended Stem 加 长杆 ', ' ', '带齿轮箱 ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],

  bindChange: function (e) {
    const val = e.detail.value
    console.log(e.detail.value)
    var firstIndex = val[0]
    var secondIndex = val[1]
    var thirdIndex = val[2]
    var fourthIndex = val[3]
    var fifthIndex = val[4]
    var sixthIndex = val[5]
    var seventhIndex = val[6]


    // this.data.Rfirst= this.first[firstIndex]
    this.setData({
      Rfirst: this.first[firstIndex]
    });
    console.log("Rfirst: " + this.data.Rfirst)

    this.setData({
      Rsecond: this.second[secondIndex]
    });
    console.log("Rsecond: " + this.data.Rsecond)

    this.setData({
      Rthird: this.third[thirdIndex]
    });
    console.log("Rthird: " + this.data.Rthird)

    this.setData({
      Rfourth: this.fourth[fourthIndex]
    });
    console.log("Rfourth: " + this.data.Rfourth)

    this.setData({
      Rfifth: this.fifth[fifthIndex]
    });
    console.log("Rfifth: " + this.data.Rfifth)

    this.setData({
      Rsixth: this.sixth[sixthIndex]
    });
    console.log("Rsixth: " + this.data.Rsixth)

    this.setData({
      Rseventh: this.seventh[seventhIndex]
    });
    console.log("Rseventh: " + this.data.Rseventh)
  }
})