const isActive = (active,current) => {

 if(active===current){
 return "list-group-item list-group-item-action active";
 }
 else {
 return "list-group-item list-group-item-action";
 }

}



const NavigationSidebar = (active) => {
 return(`
<div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i></a>
                <a href="../HomeScreen/homescreen.html" class="${isActive(active, "home")}">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-xl-inline">
                        Home
                    </span>
                </a>
                <a href="../ExploreScreen/explore.html" class="${isActive(active, "explore")}">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-xl-inline">
                        Explore
                    </span>
                </a>
                <a href="#" class="${isActive(active, "notifications")}">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-xl-inline">
                        Notifications
                    </span>
                </a>
                <a href="#" class="${isActive(active, "messages")}">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-xl-inline">
                        Messages
                    </span>
                  </a>
                <a href="#" class="${isActive(active, "bookmarks")}">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-xl-inline">
                        Bookmarks
                    </span>
                </a>
                <a href="#" class="${isActive(active, "lists")}">
                    <i class="fas fa-list"></i>
                    <span class="d-none d-xl-inline">
                        Lists
                    </span>
                </a>
                <a href="#" class="${isActive(active, "profile")}">
                    <i class="fas fa-user"></i>
                    <span class="d-none d-xl-inline">
                        Profile
                    </span>
                </a>
                <a href="#" class="${isActive(active, "more")}">
                    <span class="fa-stack wd-icon-size">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse text-secondary"></i>
                    </span>
                    <span class="d-none d-xl-inline">
                        More
                    </span>
                </a>

            </div>
            <button type="button" class="btn btn-primary rounded-pill mt-2" style = "width:100%">
                Tuit</button>
 `);
}
export default NavigationSidebar;