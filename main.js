var canvas = new fabric.Canvas("myCanvas");
player_height = 100;
player_width = 100;
block_height = 30;
block_width = 30;
player_x = 10;
player_y = 10;
player_object = "";
block_object = "";

function playerupdate(){
    fabric.Image.fromURL("player.png", function(img){
        player_object = img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(140);
player_object.set({
    left:player_x,
    top:player_y,
});
canvas.add(player_object);
    })
}

function objectupdate(image){
    fabric.Image.fromURL(image, function(img){
        block_object = img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
block_object.set({
    left:player_x,
    top:player_y,
});
canvas.add(block_object);
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keycode = e.keyCode
    console.log(keycode);
    if(e.shiftKey == true && keycode == '80'){
        block_height += 10;
        block_width += 10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    else if(e.shiftKey == true && keycode == '77'){
        block_height -= 10;
        block_width -= 10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    else if(keycode == '71'){
        objectupdate("ground.png");
        console.log("g");
    }
    else if(keycode == '76'){
        objectupdate("light_green.png");
        console.log("l");
    }
    else if(keycode == '68'){
        objectupdate("dark_green.png");
        console.log("d");
    }
    else if(keycode == '82'){
        objectupdate("roof.jpg");
        console.log("r");
    }
    else if(keycode == '67'){
        objectupdate("cloud.jpg");
        console.log("c");
    }
    else if(keycode == '84'){
        objectupdate("trunk.jpg");
        console.log("T");
    }
    else if(keycode == '85'){
        objectupdate("unique.png");
        console.log("u")
    }
    else if(keycode == '87' ){
        objectupdate("wall.jpg");
        console.log("w");
    }
    else if(keycode == '89'){
        objectupdate("yellow_wall.png");
        console.log("y");
    }
    else if(keycode == '37'){
        left();
    }
    else if(keycode == '38'){
        up();
    }
    else if(keycode == '39'){
        right();
    }
    else if(keycode == '40'){
        down();
    }
}
function left(){
    if(player_x >= 0){
        player_x = player_x - block_width;
        canvas.remove(player_object);
        playerupdate();
    }
}
function up(){
    if(player_y >= 0){
        player_y = player_y - block_height;
        canvas.remove(player_object);
        playerupdate();
    }
}
function right(){
    if(player_x <= 700){
        player_x = player_x + block_width;
        canvas.remove(player_object);
        playerupdate();
    }
}
function down(){
    if(player_y <= 500){
        player_y = player_y + block_height;
        canvas.remove(player_object);
        playerupdate();
    }
}