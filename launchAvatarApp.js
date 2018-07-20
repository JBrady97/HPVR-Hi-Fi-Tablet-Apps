(function() {

    var APP_NAME = "AVATARS";
    var APP_URL = "https://github.azc.ext.hp.com/WSTC-VR/Hi-Fi-Avatar-Control-Tablet-App/blob/master/avatarTemplate.html";
    

    // Link to our avatar options
    var AVATARURL1 = "atp:/Frank1.fst";
    var AVATARURL2 = "atp:/Spike1.fst";
	var AVATARURL3 = "atp:/JB_ManualRig_6-19-18.fst";
	var AVATARURL4 = "atp:/NJS4.fst";

    // Get a reference to the tablet 
    var tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
	
    var button = tablet.addButton({
            text: APP_NAME
            
        });

    function onClicked(){
        tablet.gotoWebScreen(APP_URL);
    }
    button.clicked.connect(onClicked);

    function onWebEventReceived(event){ 
        print("Received Web Event: " + event);

        if(typeof event === "string"){
            event = JSON.parse(event);
        }

        if(event.type === "click")
        {
            if(event.data === "Avatar 1"){
                print("Avatar 1 data");
                MyAvatar.skeletonModelURL = AVATARURL1;
            }
            else if(event.data === "Avatar 2"){
                print("Avatar 2 data");
                MyAvatar.skeletonModelURL = AVATARURL2;
            }
			else if(event.data === "Avatar 3"){
                print("Avatar 3 data");
                MyAvatar.skeletonModelURL = AVATARURL3;
            }
			else if(event.data ==="Avatar 4"){
				print("Avatar 4 data");
				MyAvatar.skeletonModelURL = AVATARURL4;
			
			

        }
    }
    tablet.webEventReceived.connect(onWebEventReceived);
    function cleanup() {
        tablet.removeButton(button);
    }
    Script.scriptEnding.connect(cleanup);
}());
