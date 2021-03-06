// 给定字符串 S 和单词字典 words, 求 words[i] 中是 S 的子序列的单词个数。

// 示例:
// 输入: 
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// 输出: 3
// 解释: 有三个是 S 的子序列的单词: "a", "acd", "ace"。
// 注意:

// 所有在words和 S 里的单词都只由小写字母组成。
// S 的长度在 [1, 50000]。
// words 的长度在 [1, 5000]。
// words[i]的长度在[1, 50]。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-matching-subsequences
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    let tire = getTrie(words)
    let rs = tire.walk("#"+S)
    // for(let i in S){
    //     rs += tire.walk("#"+S.slice(i))
    // }

    return rs
};

var getTrie = function(words){
    let root = new TrieNode("#",false)
    for(let word of words){
        root.add(word)
    }

    return root
}

var TrieNode = function(val,isEnd){
    this.val = val
    this.isEnd = isEnd
    this.childMap = {}
    this.size = 0
    this.walkMap = {}
}

/**
 * @param {string} str
 */
TrieNode.prototype.add = function(str){
    if(str.length == 0) return
    let child = this.childMap[str[0]]
    if(!child){
        child = new TrieNode(str[0],0)
        this.childMap[str[0]] = child
    }

    if(str.length == 1) child.isEnd++
    child.add(str.slice(1))
}

TrieNode.prototype.walk = function(str){
    if(str.length <= 1) return 0
    if(this.walkMap[str]) return 0
    this.walkMap[str] = true
    let child = this.childMap[str[1]]
    if(!child){
        return this.walk(str.slice(1))
    }
    else{
        let ok = child.isEnd
        child.isEnd = 0
        return child.walk(str.slice(1))+ok + this.walk(str.slice(1))
    }
}

TrieNode.prototype.wordSize = function(){
    let rs = 0
    for(let child of this.childMap){
        return rs += child.wordSize()
    }

    this.size = rs

    return rs
}

TrieNode.prototype.clean = function(){
    if(this.wordSize()==0) this.childMap = {}

    let rs = 0
    for(let child of this.childMap){
        if(child.size == 0) delete this.childMap[child.val]
        else child.clean()
    }
    
}

let util = require("../util/common")

let trie = getTrie(["a", "bb", "acd", "ace"])

// util.assert(numMatchingSubseq("abcde",["a", "bb", "acd", "ace"]),3)
// util.assert(numMatchingSubseq("qlhxagxdqh",["qlhxagxdq","qlhxagxdq","lhyiftwtut","yfzwraahab"]),2)
// util.assert(numMatchingSubseq("ricogwqznwxxcpueelcobbbkuvxxrvgyehsudccpsnuxpcqobtvwkuvsubiidjtccoqvuahijyefbpqhbejuisksutsowhufsygtwteiqyligsnbqglqblhpdzzeurtdohdcbjvzgjwylmmoiundjscnlhbrhookmioxqighkxfugpeekgtdofwzemelpyjsdeeppapjoliqlhbrbghqjezzaxuwyrbczodtrhsvnaxhcjiyiphbglyolnswlvtlbmkrsurrcsgdzutwgjofowhryrubnxkahocqjzwwagqidjhwbunvlchojtbvnzdzqpvrazfcxtvhkruvuturdicnucvndigovkzrqiyastqpmfmuouycodvsyjajekhvyjyrydhxkdhffyytldcdlxqbaszbuxsacqwqnhrewhagldzhryzdmmrwnxhaqfezeeabuacyswollycgiowuuudrgzmwnxaezuqlsfvchjfloczlwbefksxsbanrektvibbwxnokzkhndmdhweyeycamjeplecewpnpbshhidnzwopdjuwbecarkgapyjfgmanuavzrxricbgagblomyseyvoeurekqjyljosvbneofjzxtaizjypbcxnbfeibrfjwyjqrisuybfxpvqywqjdlyznmojdhbeomyjqptltpugzceyzenflfnhrptuugyfsghluythksqhmxlmggtcbdddeoincygycdpehteiugqbptyqbvokpwovbnplshnzafunqglnpjvwddvdlmjjyzmwwxzjckmaptilrbfpjxiarmwalhbdjiwbaknvcqovwcqiekzfskpbhgxpyomekqvzpqyirelpadooxjhsyxjkfqavbaoqqvvknqryhotjritrkvdveyapjfsfzenfpuazdrfdofhudqbfnzxnvpluwicurrtshyvevkriudayyysepzqfgqwhgobwyhxltligahroyshfndydvffd",
// ["iowuuudrgzmw","azfcxtvhkruvuturdicnucvndigovkzrq","ylmmo","maptilrbfpjxiarmwalhbd","oqvuahijyefbpqhbejuisksutsowhufsygtwteiqyligsnbqgl","ytldcdlxqbaszbuxsacqwqnhrewhagldzhr","zeeab","cqie","pvrazfcxtvhkruvuturdicnucvndigovkzrqiya","zxnvpluwicurrtshyvevkriudayyysepzq","wyhxltligahroyshfn","nhrewhagldzhryzdmmrwn","yqbvokpwovbnplshnzafunqglnpjvwddvdlmjjyzmw","nhrptuugyfsghluythksqhmxlmggtcbdd","yligsnbqglqblhpdzzeurtdohdcbjvzgjwylmmoiundjsc","zdrfdofhudqbfnzxnvpluwicurrtshyvevkriudayyysepzq","ncygycdpehteiugqbptyqbvokpwovbnplshnzafun","gdzutwgjofowhryrubnxkahocqjzww","eppapjoliqlhbrbgh","qwhgobwyhxltligahroys","dzutwgjofowhryrubnxkah","rydhxkdhffyytldcdlxqbaszbuxs","tyqbvokpwovbnplshnzafunqglnpjvwddvdlmjjyzmwwxzjc","khvyjyrydhxkdhffyytldcdlxqbasz","jajekhvyjyrydhxkdhffyytldcdlxqbaszbuxsacqwqn","ppapjoliqlhbrbghq","zmwwxzjckmaptilrbfpjxiarm","nxkahocqjzwwagqidjhwbunvlchoj","ybfxpvqywqjdlyznmojdhbeomyjqptltp","udrgzmwnxae","nqglnpjvwddvdlmjjyzmww","swlvtlbmkrsurrcsgdzutwgjofowhryrubn","hudqbfnzxnvpluwicurr","xaezuqlsfvchjf","tvibbwxnokzkhndmdhweyeycamjeplec","olnswlvtlbmkrsurrcsgdzu","qiyastqpmfmuouycodvsyjajekhvyjyrydhxkdhffyyt","eiqyligsnbqglqblhpdzzeurtdohdcbjvzgjwyl","cgiowuuudrgzmwnxaezuqlsfvchjflocz","rxric","cygycdpehteiugqbptyqbvokpwovbnplshnzaf","g","surrcsgd","yzenflfnhrptuugyfsghluythksqh","gdzutwgjofowhryrubnxkahocqjzwwagqid","ddeoincygycdpeh","yznmojdhbeomyjqptltpugzceyzenflfnhrptuug","ejuisks","teiqyligsnbqglqblhpdzzeurtdohdcbjvzgjwylmmoi","mrwnxhaqfezeeabuacyswollycgio","qfskkpfakjretogrokmxemjjbvgmmqrfdxlkfvycwalbdeumav","wjgjhlrpvhqozvvkifhftnfqcfjmmzhtxsoqbeduqmnpvimagq","ibxhtobuolmllbasaxlanjgalgmbjuxmqpadllryaobcucdeqc","ydlddogzvzttizzzjohfsenatvbpngarutztgdqczkzoenbxzv","rmsakibpprdrttycxglfgtjlifznnnlkgjqseguijfctrcahbb","pqquuarnoybphojyoyizhuyjfgwdlzcmkdbdqzatgmabhnpuyh","akposmzwykwrenlcrqwrrvsfqxzohrramdajwzlseguupjfzvd","vyldyqpvmnoemzeyxslcoysqfpvvotenkmehqvopynllvwhxzr","ysyskgrbolixwmffygycvgewxqnxvjsfefpmxrtsqsvpowoctw","oqjgumitldivceezxgoiwjgozfqcnkergctffspdxdbnmvjago","bpfgqhlkvevfazcmpdqakonkudniuobhqzypqlyocjdngltywn","ttucplgotbiceepzfxdebvluioeeitzmesmoxliuwqsftfmvlg","xhkklcwblyjmdyhfscmeffmmerxdioseybombzxjatkkltrvzq","qkvvbrgbzzfhzizulssaxupyqwniqradvkjivedckjrinrlxgi","itjudnlqncbspswkbcwldkwujlshwsgziontsobirsvskmjbrq","nmfgxfeqgqefxqivxtdrxeelsucufkhivijmzgioxioosmdpwx","ihygxkykuczvyokuveuchermxceexajilpkcxjjnwmdbwnxccl","etvcfbmadfxlprevjjnojxwonnnwjnamgrfwohgyhievupsdqd","ngskodiaxeswtqvjaqyulpedaqcchcuktfjlzyvddfeblnczmh","vnmntdvhaxqltluzwwwwrbpqwahebgtmhivtkadczpzabgcjzx","yjqqdvoxxxjbrccoaqqspqlsnxcnderaewsaqpkigtiqoqopth","wdytqvztzbdzffllbxexxughdvetajclynypnzaokqizfxqrjl","yvvwkphuzosvvntckxkmvuflrubigexkivyzzaimkxvqitpixo","lkdgtxmbgsenzmrlccmsunaezbausnsszryztfhjtezssttmsr","idyybesughzyzfdiibylnkkdeatqjjqqjbertrcactapbcarzb","ujiajnirancrfdvrfardygbcnzkqsvujkhcegdfibtcuxzbpds","jjtkmalhmrknaasskjnixzwjgvusbozslrribgazdhaylaxobj","nizuzttgartfxiwcsqchizlxvvnebqdtkmghtcyzjmgyzszwgi","egtvislckyltpfogtvfbtxbsssuwvjcduxjnjuvnqyiykvmrxl","ozvzwalcvaobxbicbwjrububyxlmfcokdxcrkvuehbnokkzala","azhukctuheiwghkalboxfnuofwopsrutamthzyzlzkrlsefwcz","yhvjjzsxlescylsnvmcxzcrrzgfhbsdsvdfcykwifzjcjjbmmu","tspdebnuhrgnmhhuplbzvpkkhfpeilbwkkbgfjiuwrdmkftphk","jvnbeqzaxecwxspuxhrngmvnkvulmgobvsnqyxdplrnnwfhfqq","bcbkgwpfmmqwmzjgmflichzhrjdjxbcescfijfztpxpxvbzjch","bdrkibtxygyicjcfnzigghdekmgoybvfwshxqnjlctcdkiunob","koctqrqvfftflwsvssnokdotgtxalgegscyeotcrvyywmzescq","boigqjvosgxpsnklxdjaxtrhqlyvanuvnpldmoknmzugnubfoa","jjtxbxyazxldpnbxzgslgguvgyevyliywihuqottxuyowrwfar","zqsacrwcysmkfbpzxoaszgqqsvqglnblmxhxtjqmnectaxntvb","izcakfitdhgujdborjuhtwubqcoppsgkqtqoqyswjfldsbfcct","rroiqffqzenlerchkvmjsbmoybisjafcdzgeppyhojoggdlpzq","xwjqfobmmqomhczwufwlesolvmbtvpdxejzslxrvnijhvevxmc","ccrubahioyaxuwzloyhqyluwoknxnydbedenrccljoydfxwaxy","jjoeiuncnvixvhhynaxbkmlurwxcpukredieqlilgkupminjaj","pdbsbjnrqzrbmewmdkqqhcpzielskcazuliiatmvhcaksrusae","nizbnxpqbzsihakkadsbtgxovyuebgtzvrvbowxllkzevktkuu","hklskdbopqjwdrefpgoxaoxzevpdaiubejuaxxbrhzbamdznrr","uccnuegvmkqtagudujuildlwefbyoywypakjrhiibrxdmsspjl","awinuyoppufjxgqvcddleqdhbkmolxqyvsqprnwcoehpturicf"]),0)
util.assert(numMatchingSubseq("bijbnqvejyjehayokafhkfbqdtmdfmivooyrzlsqlvgaodegsenulwquoolmqxurgyvffeocofjvzvyabtuamhpdgkexpgrjnqfyahmdabnhoqalrtsjwmnvfoipmswiwytqeldudkkzsudrakaawjqcmieydslquvdpisuvvylkwdgqbrghvnptpjprmkrzwvqohsmflzzpoliuotqrwornmnfqlysbmyrssfslbccayviyelzkyojsqsqndvtzsmfmpiabivrvxgtqdxcmdtnzxwcurqkxxdycrizvffemkouqbeajgfxnxaizfgiubzpykhnjxsdlmeqclnhntzauvqwxixdztafhwzdhdkybqwoyzwxiyvgxupskyhiyilgicwukcqyefoqffxpyqtpbijwnwvapkioyhatvytooubwfdcckffjzsiuimkwinrshvxbkllhnmddlkhvvmxnubqgalrnufrebzolpdnmxvnfzdghmwraciqckkeuuzkzsotuukrcjjllnppqhskkursophpgkvlbxotdehvpziihpofhoqakimrwqrgrknqxelivdnblnjlfqsfnhgyodoutkeuwvfjywwtrmaxukopdormzucqjeekdjiqkrpdfnovrlaoypjwwxeremkxbzgmdferklbydzynucngbntzbksgwfnffixzjxlqqsztvfnrlntfnamsjbmixuarranowtlrgfttkfrunzlsgujvrmwzskjtadmvpotoqjyqrvkefigyrdnvdzngboxcxulycldmnefoexqxfbnkewpthlwaombbwzyekbtbhabvmmeibwexehsdfhhwrpwdnahjpsqsiscrxmljhnutuhhmgqfmfzoroopcfoirewcfjenbnnpdvkblvkymolxusroawhlwjgxhyxfwipudikqiwnzvhxuzaspzhefztskqyoqlsyshabxivcznjhyjjmlxaikwuqsxnwsezz",
["owtlrgfttkfrunzlsgujvrmwzskjtadmvpotoqjyqrvkefigy","fqlysbmyrssfsl","vdzngboxcxulycldmnefoexqxfbnkew","knqxelivdnblnjl","msjbmixuarranowtlrgf","kffjzsiuimkwinrshvxbkl","egsenulwquoolmqxurgyvffeocofjvzvyabt","cxulycldmnefoexqxf","j","jwmnvfoipms","roawhlwjgxhyx","iuimkwinrshvx","izvffemkouqbeajgfxnxaizfgiubzp","ixuarranowtlrgfttkfrunzlsgujvrmwzskjta","lbydzynucngbntzbksgwfn","urgyvffeocofjvzvyabtu","zolpdnmxvnfzdghmwraciqck","sdfhhwrpwdnahjpsqsiscrxmljhnutuhhmgqfmfzoroop","zkyojsqsqndvtzsmfmpiabivrvxgtqdxcmdtnzxwcurqkxxdy","aspzhefztskqyoqlsyshabxivcznjhyjjm","efoqffxpyqtpbijwnwvapkioyhatvytooubwfdcc","kyojsqsqndvtzsmfmpiabivrvxgtqdxcmdtnzxw","senulwquoolmqxurgyvffeoco","jehayokafhkfbqdtmdfmivooyrzlsqlvgaod","vyabtu","rmwzskjtadmvpotoqjyqrvkefigyrdnvdzngboxc","kafhkfbqdtmdfmivooyrzlsqlvgaodegsenulwquo","qdtmdfmivooyrzlsqlvgaodeg","zdhdkybqwoyzwxiyvgxupskyhiyilgicwuk","eydslquvdpisu","beajg","gkvlbxotdehvpziihpofhoqaki","efigyrdn","aciqckkeuuzkzsotuukrcjjllnppqhskkursophpgkvlbxot","fjzsiuimkwinrshvxbkllhnmddlkhvvmxnubq","qrgrknqxelivdnblnjlfqsfnhgyodoutkeuwvfjywwtrma","uuzkzsotuukrcjjllnppqhskkursophpgkvlbxotdeh","oqjyqrvkefigyrdnvdzn","oliuotqrwornmnfqly","lvgaodegsenulwquoolmqxu","r","qwxixdztafhwzdhdkybqwoyzwxiyvgxupsky","vejyjehayokaf","zpykhnjxsdlm","dpisuvvylkwdgqbrghvn","o","lbxotdehvpziihpofhoqakimrwqrgrknqxelivdnbln","hoqalrtsjwmn","nufr","ypjwwxeremkxbzgmdferk","lfkooyrigeiextkyzkwlikdwkusdjdsyqvrotcwxgmrcjljprs","mpfuscuwoudwgooalxeauyezamoarahzdfaylfegkktmapvbep","sstnpisuoqnrfvwulyukcvvnkptmshezunejblypqogdlhjnmt","dpolwuvzikkfhkddognxqhrlpgdxljilevkrgzpcdwcqptgbuu","qfngpbryburnqsflicdqsfhmjgzulbafaiyuwccpbesqujbqjv","spfmnyoaohumwehvhwgwumkxhaecyhmvldyrkyopfsezyxvach","xhjqlomhtvezqmwtardhglvaprsnqvsqhfklzkezranhtiqhmk","ghrvkbnkuilrnzcumjxndotweppcocxwxiczlpgnrhjoczpqrp","spreizuasgqjdekgnpypobvopnsrzdzsrjqojnetcahxkrdcud","ckptnmmcqercrnkuyfulcuqsizptixjlmlzrqjxwyommymouyh","lotvznvoqisoejeytazutaluhuuysnmafsjlxqmkukzeintggd","bgcegqrpjxsnkwplemoxwcfmvpysdnxqjnuielansysawsxlyo","baqtiziavuozvbwaughdbkqtcjxokwglfcsfwgkxvejmihdxui","fzqjdutijfuyabhytsetpwwypvaiqmmhxqctmircrixgkbyszv","frrexvkudsuxoqohibdzrjcxmnlnlmwabilnvwvujefflvpcqq","wkcluqfydfvvdlukrsaupnxndtjyybquiaezdyrxvesvahkxfr","xuzdinxgzmpfeekevykxujjoztbwxjmggijbesfxexblkhubwh","qksyghrpftjyotdnqmtafahzmzrybahbfmvoruqiwhpejqhjmy","ufchvyuvtmdoewgghrkirmipidmirnajasbagvznjmauehtfff","xmvkeflrmwangvqszlkbduowqldgmwxzepkblwiqzuglbxetia","hfideclgveevrqfnfmnkkmpqyuzyvnrjyrinagurzpksjzpqpx","laevcovxbntyjqavyvltzaweuhyjkoltyxdokybrgldxtqygai","uharlsfdgeqkikaigzmxidfwprvfdvcvrlmjaffvzrndfrfxei","czlmicwntzpddiwpbvnkgzuhjixkycqkzjzvgbqhwsbenwrajd","aykkyqcilkiojwexbibwafwevzyactrukerrifvbubzotdwnst","ufdspjjttzfwyllqaynsnrfrowknmveyoiybyhxbuadlwjsfnx","nreiwlzhdwexzhztsezsxyodiuutnagapnmgsabbqbuvoypuha","mkkavztahosgwwzeyngptmniprjrfvvwtxcljmgphaioujtbpd","mqyjhihwapxdxyrkklheckziozylsijifiwqdvozuaebjifkux","kwexbilcorrqnaxjbvskggvrcqvvgfdrphgigakeotqhnebrqo","vudgkdnrxqlfcyjfhaxioqivfgkodcibqqubnceherkmlmxsjr","lywditrcgkknxmjzzahfhinczurytyybnumwpficzgknzklyai","cldqpjihaytztccnnmzdilyhafhhvblqmkxqcpacgxxpsulzbr","sozasvgtgdbhpnzbmlterlmyiqfimopdympzaravyiqqaumjaa","hzjjtdzzohumfhvqbumrhtxwbsbafmoggeoqkibmnjotwndcts","daxrprkmdmquwlevimwzdgkegwtnezsadfflqvnpanqdjvmqwe","etybdrnosfzwkracyqktpchkypmylxkyjfeyukubfeirudushx","lhxhiovxhsxvmhzykjeqfybqjrglnfleasbaknybvatvtfudfu","wdalykhcktkiwprdxoofexgusdoxsdivysuygxnxzgocclhuln","rnjccfzuunoxthaxkqnjcppkylcunxnxzxcefyghhhsbehorau","dagsbroaicyjwylzwrnopgmcoflckssksdehgcqzgfszotbwji","nmjqkgappxooypkaybrqwdrdyjgjxbdatsbtrgcoxblmmbavrr","fpoafxrvrwkjmsftaevxwvurjywwwtsikjvlpeamrfmddwdmko","ymoonumynahslmbecqhqzebbeuebxwiwoqqubrraqtgjzrvjhr","idvunappwkcisajmwrcakocbahjzquaugybpnojvyisjljxvjn","vkgrkijpxxeimwrxhitsgomlkdbrautgeapffsxyphfkrmllco","oaapnktvhgewlbumjlsbbncwbtpkhkmmlixvedzldxtwmhyain","dzhhlbnkfyvoyussdgbdppjlmfnfxqqwyvzxiaqjadufhjejoe","brvkalhbgtackudwzslpjaqhvymoparaengnxwigapgbesorrq","urpycsrfkpcgerxvnkmmmqhygdptsevwssxkimawiblsbhilmh"]),52)
