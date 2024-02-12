const start=document.getElementById('enter');
const tweet=document.getElementById('post');

let all=0;

function total(){

    let rem=document.getElementById("tannisuu");
    while(rem.firstChild){
        rem.removeChild(rem.firstChild);
    }
    rem=document.getElementById("cond");
    while(rem.firstChild){
        rem.removeChild(rem.firstChild);
    }

    let senmonkiso=0;
    let kikankiso=0;
    let kanrensenmon=0;
    let hissyuu=0;
    let sentakuhissyuu=0;
    let sentaku=0;
    let eigo1=0;
    let eigo2=0;
    let dai2gai=0;
    let hissyuu1nen=0;
    let hissyuu2nen=0;
    let grade=0;
    let kyouyou=0;
    let kyouyou3nen=0;
    let suuken=0;
    all=0;

    grade+=document.getElementById('grade').value-'0';

    // 1年
    if(document.getElementById('kaisekikiso').checked==true){
        senmonkiso+=3;
        hissyuu1nen+=3;
    }
    if(document.getElementById('1biseki').checked==true){
        senmonkiso+=2;
        hissyuu1nen+=2;
    }
    if(document.getElementById('tabiseki').checked==true){
        senmonkiso+=5;
        hissyuu1nen+=5;
    }
    if(document.getElementById('senkei1').checked==true){
        senmonkiso+=3;
        hissyuu1nen+=3;
    }
    if(document.getElementById('senkei2').checked==true){
        senmonkiso+=3;
        hissyuu1nen+=3;
    }
    if(document.getElementById('ronshu').checked==true){
        senmonkiso+=3;
        hissyuu1nen+=3;
    }
    if(document.getElementById('kikakiso').checked==true){
        senmonkiso+=3;
        hissyuu1nen+=3;
    }
    if(document.getElementById('comnyu1').checked==true){
        kikankiso+=2;
        hissyuu1nen+=2;
    }
    if(document.getElementById('comnyu2').checked==true){
        kikankiso+=2;
        hissyuu1nen+=2;
    }

    kanrensenmon+=document.getElementById('ks').value-'0';
    eigo1+=document.getElementById('eng1').value-'0';
    dai2gai+=document.getElementById('2gai').value-'0';

    // 2年
    if(document.getElementById('kaiseki1').checked==true){
        hissyuu+=3;
        hissyuu2nen+=3;
    }
    if(document.getElementById('kaiseki2').checked==true){
        hissyuu+=3;
        hissyuu2nen+=3;
    }
    if(document.getElementById('daisuu1').checked==true){
        hissyuu+=3;
        hissyuu2nen+=3;
    }
    if(document.getElementById('daisuu2').checked==true){
        hissyuu+=3;
        hissyuu2nen+=3;
    }
    if(document.getElementById('kika1').checked==true){
        hissyuu+=3;
        hissyuu2nen+=3;
    }
    if(document.getElementById('kika2').checked==true){
        hissyuu+=3;
        hissyuu2nen+=3;
    }
    if(document.getElementById('toukei1').checked==true){
        senmonkiso+=3;
        hissyuu2nen+=3;
    }
    if(document.getElementById('toukei2').checked==true){
        senmonkiso+=3;
        hissyuu2nen+=3;
    }
    if(document.getElementById('isou1').checked==true){
        hissyuu+=3;
        hissyuu2nen+=3;
    }
    if(document.getElementById('isou2').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('comgai1').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('comgai2').checked==true){
        sentaku+=2;
    }

    eigo2+=document.getElementById('eng2').value-'0';

    // 3年

    if(document.getElementById('suuken1').checked==true){
        hissyuu+=3;
        suuken+=3;
    }
    if(document.getElementById('suuken2').checked==true){
        hissyuu+=3;
        suuken+=3;
    }
    if(document.getElementById('sekibun').checked==true){
        sentakuhissyuu+=3;
    }
    if(document.getElementById('kansuukaiseki').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kansuuron').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('bibunnhouteisiki').checked==true){
        sentakuhissyuu+=3;
    }
    if(document.getElementById('galois1').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('galois2').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kagun1').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kagun2').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('bibunkika1').checked==true){
        sentakuhissyuu+=3;
    }
    if(document.getElementById('bibunkika2').checked==true){
        sentakuhissyuu+=3;
    }
    if(document.getElementById('isoukika').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kakuritu1').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kakuritu2').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kyouikuron1').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('kyouikuron2').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('kyouikusuugaku').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('keisan1').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('keisan2').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('pro1').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('pro2').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('jouhousuugaku').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('system').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('network').checked==true){
        sentaku+=2;
    }
    if(document.getElementById('media').checked==true){
        sentaku+=2;
    }
    
    // 4年

    if(document.getElementById('sotsuken').checked==true){
        hissyuu+=8;
    }
    if(document.getElementById('kaiseki3').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kaiseki4').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('daisuu3').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('daisuu4').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kika3').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kika4').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kikatoku1').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('kikatoku2').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('suutoku1').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('suutoku2').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('suutoku3').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('suutoku4').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('suutoku5').checked==true){
        sentakuhissyuu+=2;
    }
    if(document.getElementById('suutoku6').checked==true){
        sentakuhissyuu+=1;
    }
    if(document.getElementById('suutoku7').checked==true){
        sentakuhissyuu+=1;
    }
    if(document.getElementById('suutoku8').checked==true){
        sentakuhissyuu+=1;
    }
    if(document.getElementById('gazousyori').checked==true){
        sentaku+=2;
    }

    let tagakka=Number(document.getElementById('tagakka').value);
    if(tagakka!=NaN) sentakuhissyuu+=tagakka;

    kyouyou+=Number(document.getElementById('kyouyou').value);
    
    kyouyou3nen+=Number(document.getElementById('kyouyou3nen').value);

    all=senmonkiso+kikankiso+kanrensenmon+hissyuu+sentakuhissyuu+sentaku+kyouyou+eigo1+eigo2+dai2gai;

    // 単位出力
    let table=document.createElement('table');
    let thead=document.createElement('thead');
    let tbody=document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('tannisuu').appendChild(table);

    let head=document.createElement('tr');
    let head1=document.createElement('th');
    head1.innerHTML='科目';
    let head2=document.createElement('th');
    head2.innerHTML='履修単位数';
    let head3=document.createElement('th');
    head3.innerHTML='必要単位数';
    head.appendChild(head1);
    head.appendChild(head2);
    head.appendChild(head3);
    thead.appendChild(head);

    let row1=document.createElement('tr');
    let row1_1=document.createElement('td');
    row1_1.innerHTML='専門基礎';
    let row1_2=document.createElement('td');
    row1_2.innerHTML=senmonkiso;
    let row1_3=document.createElement('td');
    row1_3.innerHTML=28;
    row1.appendChild(row1_1);
    row1.appendChild(row1_2);
    row1.appendChild(row1_3);
    tbody.appendChild(row1);

    let row2=document.createElement('tr');
    let row2_1=document.createElement('td');
    row2_1.innerHTML='基幹基礎';
    let row2_2=document.createElement('td');
    row2_2.innerHTML=kikankiso;
    let row2_3=document.createElement('td');
    row2_3.innerHTML=4;
    row2.appendChild(row2_1);
    row2.appendChild(row2_2);
    row2.appendChild(row2_3);
    tbody.appendChild(row2);

    let row3=document.createElement('tr');
    let row3_1=document.createElement('td');
    row3_1.innerHTML='関連専門基礎';
    let row3_2=document.createElement('td');
    row3_2.innerHTML=kanrensenmon;
    let row3_3=document.createElement('td');
    row3_3.innerHTML=6;
    row3.appendChild(row3_1);
    row3.appendChild(row3_2);
    row3.appendChild(row3_3);
    tbody.appendChild(row3);

    let row4=document.createElement('tr');
    let row4_1=document.createElement('td');
    row4_1.innerHTML='専門必修';
    let row4_2=document.createElement('td');
    row4_2.innerHTML=hissyuu;
    let row4_3=document.createElement('td');
    row4_3.innerHTML=35;
    row4.appendChild(row4_1);
    row4.appendChild(row4_2);
    row4.appendChild(row4_3);
    tbody.appendChild(row4);
    
    let row5=document.createElement('tr');
    let row5_1=document.createElement('td');
    row5_1.innerHTML='専門選択必修';
    let row5_2=document.createElement('td');
    row5_2.innerHTML=sentakuhissyuu;
    let row5_3=document.createElement('td');
    row5_3.innerHTML=8;
    row5.appendChild(row5_1);
    row5.appendChild(row5_2);
    row5.appendChild(row5_3);
    tbody.appendChild(row5);
    
    let row6=document.createElement('tr');
    let row6_1=document.createElement('td');
    row6_1.innerHTML='専門選択';
    let row6_2=document.createElement('td');
    row6_2.innerHTML=sentaku;
    let row6_3=document.createElement('td');
    row6_3.innerHTML=13;
    row6.appendChild(row6_1);
    row6.appendChild(row6_2);
    row6.appendChild(row6_3);
    tbody.appendChild(row6);

    let row7=document.createElement('tr');
    let row7_1=document.createElement('td');
    row7_1.innerHTML='英語必修';
    let row7_2=document.createElement('td');
    row7_2.innerHTML=eigo1+eigo2;
    let row7_3=document.createElement('td');
    row7_3.innerHTML=8;
    row7.appendChild(row7_1);
    row7.appendChild(row7_2);
    row7.appendChild(row7_3);
    tbody.appendChild(row7);
    
    let row8=document.createElement('tr');
    let row8_1=document.createElement('td');
    row8_1.innerHTML='第2外国語必修';
    let row8_2=document.createElement('td');
    row8_2.innerHTML=dai2gai;
    let row8_3=document.createElement('td');
    row8_3.innerHTML=4;
    row8.appendChild(row8_1);
    row8.appendChild(row8_2);
    row8.appendChild(row8_3);
    tbody.appendChild(row8);

    let row9=document.createElement('tr');
    let row9_1=document.createElement('td');
    row9_1.innerHTML=' 一般教養(必修除く) ';
    let row9_2=document.createElement('td');
    row9_2.innerHTML=kyouyou;
    let row9_3=document.createElement('td');
    row9_3.innerHTML=18;
    row9.appendChild(row9_1);
    row9.appendChild(row9_2);
    row9.appendChild(row9_3);
    tbody.appendChild(row9);

    let row10=document.createElement('tr');
    let row10_1=document.createElement('td');
    row10_1.innerHTML='合計';
    let row10_2=document.createElement('td');
    row10_2.innerHTML=all;
    let row10_3=document.createElement('td');
    row10_3.innerHTML=124;
    row10.appendChild(row10_1);
    row10.appendChild(row10_2);
    row10.appendChild(row10_3);
    tbody.appendChild(row10);
    
    document.getElementById('tannisuu').innerHTML+='※8単位を超えて履修した"専門選択必修"科目の単位は、"専門選択"科目の単位に含めることができます。'
    
    
    
    

    // 進級・卒業条件
    if(grade==1){
        if(hissyuu1nen>=16){
            document.getElementById('cond').innerHTML+='あなたは2年次に進級することができます。<br>';
        }else{
            document.getElementById('cond').innerHTML+=`あなたは2年次に進級することができません。1年次必修科目を残り${16-hissyuu1nen}単位取得する必要があります。<br>`;
        }
    }
    if(grade==2){
        if(hissyuu1nen==26 && hissyuu2nen>=12 && eigo1==4){
            document.getElementById('cond').innerHTML+='あなたは数学研究を履修することできます。<br>';
        }else{
            document.getElementById('cond').innerHTML+='あなたは数学研究を履修することができません。以下の条件を満たす必要があります。<br><ul>';
            if(hissyuu1nen<26){
                document.getElementById('cond').innerHTML+=`<li>1年次必修科目を残り${26-hissyuu1nen}単位取得する</li>`;
            }
            if(hissyuu2nen<12){
                document.getElementById('cond').innerHTML+=`<li>2年次必修科目を残り${12-hissyuu2nen}単位取得する</li>`;
            }
            if(eigo1<4){
                document.getElementById('cond').innerHTML+=`<li>1年次英語必修科目を残り${4-eigo1}単位取得する</li>`;
            }
            document.getElementById('cond').innerHTML+='</ul><br>';
        }
    }
    if(grade==3){
        if(hissyuu1nen+hissyuu2nen>=50 && suuken==6 && kanrensenmon==6 && sentakuhissyuu>=4 && eigo2==4 && dai2gai==4 && all>100){
            document.getElementById('cond').innerHTML+=`あなたは卒業研究を履修することができます。<br>`;
        }else{
            document.getElementById('cond').innerHTML+=`あなたは卒業研究を履修することができません。以下の条件を満たす必要があります。<br><ul>`;
            if(hissyuu1nen+hissyuu2nen<50){
                document.getElementById('cond').innerHTML+=`<li>1年次必修科目・2年次必修科目を残り${50-hissyuu1nen-hissyuu2nen}単位取得する</li>`;
            }
            if(suuken<6){
                document.getElementById('cond').innerHTML+=`<li>数学研究1/数学研究2を取得する`;
            }
            if(kanrensenmon<6){
                document.getElementById('cond').innerHTML+=`<li>関連専門科目(理科科目)を残り${6-kanrensenmon}単位取得する</li>`;
            }
            if(sentakuhissyuu<4){
                document.getElementById('cond').innerHTML+=`<li>選択必修科目を残り${4-sentakuhissyuu}単位取得する</li>`;
            }
            if(eigo2<4){
                document.getElementById('cond').innerHTML+=`<li>2年次英語必修科目を残り${4-eigo2}単位取得する</li>`;
            }
            if(dai2gai<4){
                document.getElementById('cond').innerHTML+=`<li>第2外国語科目を残り${4-dai2gai}単位取得する</li>`;
            }
            if(all<100){
                document.getElementById('cond').innerHTML+=`卒業所要単位を合計で残り${100-all}単位取得する</li>`;
            }
            document.getElementById('cond').innerHTML+=`</ul><br>`;
        }
    }

    let sentakuhissyuu_amari=sentakuhissyuu-8;
    if(sentakuhissyuu_amari<0) sentakuhissyuu_amari=0;

    if(senmonkiso>=28 && kikankiso>=4 && kanrensenmon>=6 && hissyuu>=35 && sentakuhissyuu>=8 && sentakuhissyuu_amari+sentaku>=13 && eigo1+eigo2>=8 && dai2gai>=4 && kyouyou>=18 && kyouyou3nen>=4){
        document.getElementById('cond').innerHTML+=`あなたは東京理科大学理学部第一部数学科を卒業することができます。おめでとうございます。<br>`;
    }else{
        document.getElementById('cond').innerHTML+=`卒業するには以下の条件を満たす必要があります。<br><ul>`;
        if(senmonkiso<28){
            document.getElementById('cond').innerHTML+=`<li>専門基礎科目を残り${28-senmonkiso}単位取得する</li>`;
        }
        if(kikankiso<4){
            document.getElementById('cond').innerHTML+=`<li>基幹基礎科目を残り${4-kikankiso}単位取得する</li>`;
        }
        if(kanrensenmon<6){
            document.getElementById('cond').innerHTML+=`<li>関連専門科目を残り${6-kanrensenmon}単位取得する</li>`;
        }
        if(hissyuu<35){
            document.getElementById('cond').innerHTML+=`<li>専門必修科目を残り${35-hissyuu}単位取得する</li>`;
        }
        if(sentakuhissyuu<8 && sentakuhissyuu_amari+sentaku<13){
            document.getElementById('cond').innerHTML+=`<li>専門選択必修科目を残り${8-sentakuhissyuu}単位取得した上で、専門選択必修科目と専門選択科目を合わせて${13-sentakuhissyuu_amari-sentaku}単位取得する</li>`;
        }
        if(sentakuhissyuu<8 && sentaku>=13){
            document.getElementById('cond').innerHTML+=`<li>専門選択必修科目を残り${8-sentakuhissyuu}単位取得する</li>`;
        }
        if(sentakuhissyuu>=8 && sentakuhissyuu_amari+sentaku<13){
            document.getElementById('cond').innerHTML+=`<li>専門選択必修科目と専門選択科目を合わせて${13-sentakuhissyuu_amari-sentaku}単位取得する</li>`;
        }
        if(eigo1+eigo2<8){
            document.getElementById('cond').innerHTML+=`<li>英語必修科目を残り${8-eigo1-eigo2}単位取得する</li>`;
        }
        if(dai2gai<4){
            document.getElementById('cond').innerHTML+=`<li>第2外国語科目を残り${4-dai2gai}単位取得する</li>`;
        }
        if(kyouyou<18 && kyouyou3nen<4){
            document.getElementById('cond').innerHTML+=`<li>一般教養科目を残り${18-kyouyou}単位取得(その中で${4-kyouyou3nen}単位は3年次以降に取得)する</li>`;
        }
        if(kyouyou>=18 && kyouyou3nen<4){
            document.getElementById('cond').innerHTML+=`<li>一般教養科目を3年次以降に残り${4-kyouyou3nen}単位取得する</li>`;
        }
        if(kyouyou<18 && kyouyou3nen>=4){
            document.getElementById('cond').innerHTML+=`<li>一般教養科目を残り${18-kyouyou}単位取得する</li>`;
        }
        document.getElementById('cond').innerHTML+=`</ul><br>`;
    }

}

start.addEventListener('click',total);

tweet.addEventListener('click',()=>{
    let tweet_content=`私は東京理科大学理学部第一部数学科で${all}単位取得しています。%0A`;
    let url="https://m1ffyz.github.io/S_credits_check/";

    window.open("https://twitter.com/intent/tweet?text="+tweet_content+url);
});
