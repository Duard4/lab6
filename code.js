var tickets = [];
tickets[0]={
    artist:"Тік",
    place:"Дворець Україна",
    data:"07.11.2023",

};
tickets[1]={
    name:"Полякова",
    place:"",
    data: "12.11.2023",
};
tickets[2]={
    name:"Монатік",
    place: "Stereo plaza",
    data:"17.11.2023",

};
tickets[3]={
    name:"Hardkiss",
    place:"",
    data:"11.11.2023",
};
tickets[4]={
    name:"Океан Ельзи",
    place:"Дворець Жовтневий",

    data:"07.12.2023",
};
tickets[5]={
    name:"Казка",
    place:"Дворець Україна",
    data:"10.11.2023",

};

let size=0;
while(size<tickets.length){
    if(tickets[size].place!=""){}
    else{
        tickets[size].place="Невідома адреса проведення концерту";
    }
    size++;
}

let html="";
function ras_diff_Days(content){
    let currentDate=new Date();

    let date1=new Date(content.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

    let timeDiff=Math.abs(currentDate.getTime()-date1.getTime());

    let daysDiff=Math.round(timeDiff/(1000*3600*24));
    return daysDiff;
}

function output(item, i, array){
    let content=item['data'];
    let notice;

    let DiffDays=ras_diff_Days(content);
    html=html+"<tr>";
    if (DiffDays==5) {
        notice = "останній день"
        html=html + "<tr style = 'background: rgb(150, 3, 187);'>"
        
    }
    else if (DiffDays==0) {
        notice = "йде концерт"
        html=html + "<tr style = 'background:rgba(84, 114, 130, 0.959);'>"
    }
    else {
        notice = ""

    }
    for(let key in item){
        html=html+'<td>'+item[key]+'</td>';
    }
    html=html +'<td>'+notice+'</td>';
    html=html+"</tr>";
}
function result(){
    html="<table style='table'>";
    html=html+"<tr><td>Виконавець</td><td>Місце проведення</td><td>Дата</td><td>Повідомлення</td></tr>";
    tickets.forEach(output);
    html=html+"</table>";
    document.getElementById('finish').innerHTML=html;
}