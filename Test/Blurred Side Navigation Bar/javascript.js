  var toggler = document.getElementById("toggler");
        var togglericon = document.getElementById("togglericon")
        var sidenav = document.getElementById("sidenav");
        var pname = document.getElementById("pname");
        var menuname = document.getElementsByClassName("menu-name");
        var createtask = document.getElementById("createtask");
        var taskicon = document.getElementById("taskicon");
        var task = document.getElementById("task");
        var link = document.getElementById("link");
        var flag = 0;
        function toggle()
        {
            if (flag == 0) 
            {
                sidenav.style.width = "60px";
                pname.style.display = "none";
                toggler.style.background = "linear-gradient(90deg,  rgba(206, 191, 191, 0) 50%, white 50%)";
                togglericon.src = "https://img.icons8.com/metro/26/forward.png";
                togglericon.style.margin = "auto";
                togglericon.style.marginRight = "5px";
                createtask.style.backgroundColor = "transparent";
                task.style.display = "none";
                link.style.display = "none";
                taskicon.style.margin = "auto";
                for (let index = 0; index < menuname.length; index++) {
                    const element = menuname[index];
                    element.style.display = 'none';
                    
                }
                flag = 1;
            } 
            else 
            {
                sidenav.style.width = "200px";
                toggler.style.background = "linear-gradient(90deg, white 50%, rgba(206, 191, 191, 0) 50%)";
                togglericon.src = "https://img.icons8.com/metro/26/back.png";
                togglericon.style.margin = "auto";
                togglericon.style.marginLeft = "5px";
                pname.style.display = "flex";
                taskicon.style.margin = "auto";
                taskicon.style.marginBottom = "0px";
                createtask.style.backgroundColor = "white";
                task.style.display = "block";
                link.style.display = "block"; 
                for (let index = 0; index < menuname.length; index++) {
                    const element = menuname[index];
                    element.style.display = 'flex';
                    
                }
                flag = 0;
            }
            
        }