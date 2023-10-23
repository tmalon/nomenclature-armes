init()
animate()


function new_image(src) {
    img = new Image()
    img.src = src
    return img
}


function getMousePos(c, event) {
    var rect = c.getBoundingClientRect()
    return {
        x: (event.clientX - rect.left)/zoom,
        y: (event.clientY - rect.top)/zoom
    }
}


function reportWindowSize() {

    canvas.style.transformOrigin = 'top left'
    zoom = Math.min(window.innerHeight / 1080, window.innerWidth / 1920)
    canvas.style.transform="scale(" + zoom + "," + zoom + ")"

}




function init() {
    liste_classes=["1853 Enfield rifle-musket","Accuracy International Arctic Warfare Magnum","AEK-919K Kashtan submachine gun","AK 101","AK-12 rifle","AK 47","AK 74","AKS 74U","AN-94 rifle","ArmaLite AR10","ArmaLite AR15","Astra 600","Astra Modele 900","AS Val rifle","Atchisson AA-12 shotgun","Barrett M107","Barrett M95","Bauer Automatic 25","Benelli M4 Super 90","Berdan Sharps Rifle","Beretta 92FS","Beretta 98FS","Beretta ARX100 rifle","Beretta M9A1 pistol","Bren light machine gun","Brown Bess musket","Browning BT-99 Shotgun","Browning Hi-Power Mark III pistol","Bushmaster AR 15 Semiautomatic Rifle","Cabot Guns 1911 pistol","Chamelot-Delvigne Model 1873","Chauchat light machine gun","CheyTac Intervention rifle","Chiappa Rhino 40DS revolver","Cobra CA380","Cobra FS380","Colt 1851 Navy revolver","Colt 1873 Single Action Army","Colt AR15 M4A1","Colt Commando rifle","Colt Dragon 1848 Pocket Pistol","Colt LE6920","Colt M1911","Colt Mark IV Series 70","Colt Model 1903 Pocket Hammerless pistol","COLT WOODSMAN pistol","Crosman C-TT pistol","CZ 75 Tactical Sports pistol","Daewoo K1","Degtyaryov DPM machine gun","Derringer Davis Industries 22","Dornaus Dixon Bren Ten","DPMS Oracle","Famas G2 rifle","Famas Modele F1","FMK 3","FMK 9C1","FN FAL rifle","FN Five-seven USG pistol","FN Model 1910 pistol","FN ps90 standard","FN SCAR 16S rifle","FN Tactical Police shotgun","Franchi SAS-12 shotgun","Freedom Arms model 83 revolver","Frommer Modele Stop Calibre7,65mm","FX Gladiator MKII","Galil assault rifle","Gasser M1870","Glock 17 pistol","GSh-18 pistol","Heckler Koch G36 rifle","Heckler Koch G3A3 rifle","Heckler Koch HK33 rifle","Heckler Koch HK45 Compact Tactical pistol","Heckler Koch Mark 23 pistol","Heckler Koch MG4 machine gun","Heckler Koch MP5K-PDW submachine gun","Heckler Koch MP7A1 rifle","Heckler Koch PSG1 rifle","Heckler Koch USP compact","Ithaca 37","Ithaca 37 stakeout shotgun","Jennings Jimenez Arms Modele J22","Karabiner 98 kurz rifle","Kel Tec KSG","Kel Tec SUB 2000","KS-23M shotgun","L42A1 sniper rifle","Lanchester submachine gun","Lee-Enfield No.4 Mk I","Lewis Gun","Llama III A","Lorcin 380","Luger P08 pistol","M110 Semi-Automatic Sniper System","M14 SMUD rifle","M16A4 rifle","M1911A1 pistol","M1928A1 Thompson submachine gun","M1941 Johnson rifle","M1 Carbine","M249S semiautomatic rifle","M24 Sniper Weapon System","M27 Infantry Automatic Rifle","M39 Enhanced Marksman Rifle","M3A1 Grease Gun","M40A5 Sniper Rifle","M60E3 machine gun","M8 Flare Pistol","MAB Model D pistol","MAC-10","MAC Mle 1950","Makarov PMM pistol","Manurhin MR-73","Margolin MCM Pistol","Mark XIX Desert Eagle pistol","Marlin 1881","Marlin Model 60 rifle","Marlin No32 Standard 1875","Marlin XX Standard 1873","MAS-36 CR39","MAS-38","MAT-49 submachine gun","MATEBA AutoRevolver 6-Home Protection","Mauser C96 Red 9","Mauser Modele K98","McMillan Tac-50 A1 rifle","MEU(SOC) pistol","MG34","MG 42 machine gun","Mk 12 Special Purpose Rifle","Mossberg 453T","Mossberg model 505 shotgun","MP 40 submachine gun","MP 41 Schmeisse submachine gun","MP-443 Grach pistol","Nagant M1895 revolver","Norinco Modele NP22 9x19mm","OTs-38 Stechkin silent revolver","Philadelphia Deringer pistol","Pistolet Webley Scott 9mm","Pistolet wz. 35 Vis pistol","PKP Pecheneg machine gun","PP-91 KEDR submachine gun","PPS-43 submachine gun","PPSh-41","PSM","PSS silent pistol","QBZ-95 Assault Rifle","Reck Modele R15","Remington Model 10 shotgun","Remington Model 1100 shotgun","Remington Model 870 Wingmaster","Remington MSR","Rhoner Modele SM 110","RPD machine gun","RPK-74","Ruger AR 556","Ruger Lightweight Compact Pistol","RUGER MK II pistol","Ruger new model super Blackhawk revolver","Ruger No.1 rifle","Ruger Red Label","RUGER SINGLE SIX CONVERTIBLE revolver","Ruger speed Six revolver","Ruger standard pistol","Saiga-20 shotgun","sako TRG-42 sniper rifle","Savage 1905 1907 1917","Sears Roebuck Firearms Model 66","Serdyukov SPS","SG 552 Commando rifle","Sig Sauer P226 SCT pistol","Sig Sauer P239 pistol","Sig Sauer P938 pistol","Sig Sauer Pro sp 2009 pistol","Sig Sauer SIG716 Patrol","Sig Sauer sp 2022 pistol","Smith Wesson M1917 revolver","Smith Wesson Model 10 and 19 Revolver","Smith Wesson Model 39 pistol","Smith Wesson Model 41 pistol","Smith Wesson Model 5904 pistol","Smith Wesson Model 60 revolver","Smith Wesson Model 629 revolver","Smith Wesson Model 67 revolver","Smith Wesson Modele 99 9x19mm","Smith Wesson M&P15","Smith Wesson MP Shield","Smith wesson New Model No.3 revolver","Springfield M1903A4 rifle","Springfield XD S","SR-25 sniper rifle","SR-2 Veresk submachine gun","Stag Arms Model 8TL","sten Mark 3 submachine gun","Sterling PPL","Steyr AUG rifle","Steyr M1912 pistol","Steyr Mannlicher Modele M95","StG 44 rifle","Suomi modele KP31 9x19mm","SV-98 sniper rifle","SVD Dragunov","SVT-40 rifle","Tanfoglio GT28","Tanfoglio TA90","Taurus DT .357 Magnum Revolver","Tavor TAR-21 assault rifle","Thompson Center Arms Encore Muzzleloading Rifle","Thompson Center Contender Pistol","Tokarev TT-33","Uzi pistol","Valtro PM-5 Shotgun","Vektor SS77","VSS Vintorez","Walther MPK submachine gun","Walther P38","Walther PP","Weatherby Mark V rifle","Winchester Model 1200 Police","Winchester Model 1894","Winchester Model 1903","Winchester Model 1912","Winchester Model 70","XM25 CDTE","XM29 OICW rifle","XM8","Zastava M90"]
    liste_classes_img_names=["1853+Enfield+rifle-musket","Accuracy+International+Arctic+Warfare+Magnum","AEK-919K+Kashtan+submachine+gun","AK+101","AK-12+rifle","AK+47","AK+74","AKS+74U","AN-94+rifle","ArmaLite+AR10","ArmaLite+AR15","Astra+600","Astra+Modele+900","AS+Val+rifle","Atchisson+AA-12+shotgun","Barrett+M107","Barrett+M95","Bauer+Automatic+25","Benelli+M4+Super+90","Berdan+Sharps+Rifle","Beretta+92FS","Beretta+98FS","Beretta+ARX100+rifle","Beretta+M9A1+pistol","Bren+light+machine+gun","Brown+Bess+musket","Browning+BT-99+Shotgun","Browning+Hi-Power+Mark+III+pistol","Bushmaster+AR+15+Semiautomatic+Rifle","Cabot+Guns+1911+pistol","Chamelot-Delvigne+Model+1873","Chauchat+light+machine+gun","CheyTac+Intervention+rifle","Chiappa+Rhino+40DS+revolver","Cobra+CA380","Cobra+FS380","Colt+1851+Navy+revolver","Colt+1873+Single+Action+Army","Colt+AR15+M4A1","Colt+Commando+rifle","Colt+Dragon+1848+Pocket+Pistol","Colt+LE6920","Colt+M1911","Colt+Mark+IV+Series+70","Colt+Model+1903+Pocket+Hammerless+pistol","COLT+WOODSMAN+pistol","Crosman+C-TT+pistol","CZ+75+Tactical+Sports+pistol","Daewoo+K1","Degtyaryov+DPM+machine+gun","Derringer+Davis+Industries+22","Dornaus+Dixon+Bren+Ten","DPMS+Oracle","Famas+G2+rifle","Famas+Modele+F1","FMK+3","FMK+9C1","FN+FAL+rifle","FN+Five-seven+USG+pistol","FN+Model+1910+pistol","FN+ps90+standard","FN+SCAR+16S+rifle","FN+Tactical+Police+shotgun","Franchi+SAS-12+shotgun","Freedom+Arms+model+83+revolver","Frommer+Modele+Stop+Calibre7,65mm","FX+Gladiator+MKII","Galil+assault+rifle","Gasser+M1870","Glock+17+pistol","GSh-18+pistol","Heckler+Koch+G36+rifle","Heckler+Koch+G3A3+rifle","Heckler+Koch+HK33+rifle","Heckler+Koch+HK45+Compact+Tactical+pistol","Heckler+Koch+Mark+23+pistol","Heckler+Koch+MG4+machine+gun","Heckler+Koch+MP5K-PDW+submachine+gun","Heckler+Koch+MP7A1+rifle","Heckler+Koch+PSG1+rifle","Heckler+Koch+USP+compact","Ithaca+37","Ithaca+37+stakeout+shotgun","Jennings+Jimenez+Arms+Modele+J22","Karabiner+98+kurz+rifle","Kel+Tec+KSG","Kel+Tec+SUB+2000","KS-23M+shotgun","L42A1+sniper+rifle","Lanchester+submachine+gun","Lee-Enfield+No.4+Mk+I","Lewis+Gun","Llama+III+A","Lorcin+380","Luger+P08+pistol","M110+Semi-Automatic+Sniper+System","M14+SMUD+rifle","M16A4+rifle","M1911A1+pistol","M1928A1+Thompson+submachine+gun","M1941+Johnson+rifle","M1+Carbine","M249S+semiautomatic+rifle","M24+Sniper+Weapon+System","M27+Infantry+Automatic+Rifle","M39+Enhanced+Marksman+Rifle","M3A1+Grease+Gun","M40A5+Sniper+Rifle","M60E3+machine+gun","M8+Flare+Pistol","MAB+Model+D+pistol","MAC-10","MAC+Mle+1950","Makarov+PMM+pistol","Manurhin+MR-73","Margolin+MCM+Pistol","Mark+XIX+Desert+Eagle+pistol","Marlin+1881","Marlin+Model+60+rifle","Marlin+No32+Standard+1875","Marlin+XX+Standard+1873","MAS-36+CR39","MAS-38","MAT-49+submachine+gun","MATEBA+AutoRevolver+6-Home+Protection","Mauser+C96+Red+9","Mauser+Modele+K98","McMillan+Tac-50+A1+rifle","MEU(SOC)+pistol","MG34","MG+42+machine+gun","Mk+12+Special+Purpose+Rifle","Mossberg+453T","Mossberg+model+505+shotgun","MP+40+submachine+gun","MP+41+Schmeisse+submachine+gun","MP-443+Grach+pistol","Nagant+M1895+revolver","Norinco+Modele+NP22+9x19mm","OTs-38+Stechkin+silent+revolver","Philadelphia+Deringer+pistol","Pistolet+Webley+Scott+9mm","Pistolet+wz.+35+Vis+pistol","PKP+Pecheneg+machine+gun","PP-91+KEDR+submachine+gun","PPS-43+submachine+gun","PPSh-41","PSM","PSS+silent+pistol","QBZ-95+Assault+Rifle","Reck+Modele+R15","Remington+Model+10+shotgun","Remington+Model+1100+shotgun","Remington+Model+870+Wingmaster","Remington+MSR","Rhoner+Modele+SM+110","RPD+machine+gun","RPK-74","Ruger+AR+556","Ruger+Lightweight+Compact+Pistol","RUGER+MK+II+pistol","Ruger+new+model+super+Blackhawk+revolver","Ruger+No.1+rifle","Ruger+Red+Label","RUGER+SINGLE+SIX+CONVERTIBLE+revolver","Ruger+speed+Six+revolver","Ruger+standard+pistol","Saiga-20+shotgun","sako+TRG-42+sniper+rifle","Savage+1905+1907+1917","Sears+Roebuck+Firearms+Model+66","Serdyukov+SPS","SG+552+Commando+rifle","Sig+Sauer+P226+SCT+pistol","Sig+Sauer+P239+pistol","Sig+Sauer+P938+pistol","Sig+Sauer+Pro+sp+2009+pistol","Sig+Sauer+SIG716+Patrol","Sig+Sauer+sp+2022+pistol","Smith+Wesson+M1917+revolver","Smith+Wesson+Model+10+and+19+Revolver","Smith+Wesson+Model+39+pistol","Smith+Wesson+Model+41+pistol","Smith+Wesson+Model+5904+pistol","Smith+Wesson+Model+60+revolver","Smith+Wesson+Model+629+revolver","Smith+Wesson+Model+67+revolver","Smith+Wesson+Modele+99+9x19mm","Smith+Wesson+M&P15","Smith+Wesson+MP+Shield","Smith+wesson+New+Model+No.3+revolver","Springfield+M1903A4+rifle","Springfield+XD+S","SR-25+sniper+rifle","SR-2+Veresk+submachine+gun","Stag+Arms+Model+8TL","sten+Mark+3+submachine+gun","Sterling+PPL","Steyr+AUG+rifle","Steyr+M1912+pistol","Steyr+Mannlicher+Modele+M95","StG+44+rifle","Suomi+modele+KP31+9x19mm","SV-98+sniper+rifle","SVD+Dragunov","SVT-40+rifle","Tanfoglio+GT28","Tanfoglio+TA90","Taurus+DT+.357+Magnum+Revolver","Tavor+TAR-21+assault+rifle","Thompson+Center+Arms+Encore+Muzzleloading+Rifle","Thompson+Center+Contender+Pistol","Tokarev+TT-33","Uzi+pistol","Valtro+PM-5+Shotgun","Vektor+SS77","VSS+Vintorez","Walther+MPK+submachine+gun","Walther+P38","Walther+PP","Weatherby+Mark+V+rifle","Winchester+Model+1200+Police","Winchester+Model+1894","Winchester+Model+1903","Winchester+Model+1912","Winchester+Model+70","XM25+CDTE","XM29+OICW+rifle","XM8","Zastava+M90"]

    types = []
    for (i = 0; i < liste_classes.length; i++) {
        types.push(0)
    }

    if (window.localStorage.getItem("types") !== null) {
        types = JSON.parse(window.localStorage.getItem("types"))
    }

    zoom = 1
    reportWindowSize()
    window.addEventListener('resize', reportWindowSize)

    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    ctx.font = "48px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    abbreviations = ["DÉF","AD","AL1","ALA","ALJ","ALL","ALP","ALS","ALV","ALX","AMJ","AMS","AMX","AR1","ARA","ARB","ARJ","ARL","ARP","ARS","ARV","CAC","FA","FM","MIT","P1","PSA","PAC","PGR","PM","PX","R1","RAC","RGR","RX"]

    nomenclature = ["À DÉFINIR","ARME DIVERSE","ARME LISSE 1 COUP","ARME LISSE SEMI AUTOMATIQUE","ARME LISSE CANONS JUXTAPOSES","ARME LISSE AVEC LEVIER","ARME LISSE A POMPE","ARME LISSE CANONS SUPERPOSES","ARME LISSE AVEC CULASSE OU VERROU","ARME LISSE A 3 CANONS OU PLUS","ARME MIXTE CANONS JUXTAPOSES","ARME MIXTE CANONS SUPERPOSES","ARME MIXTE MULTICOUPS","ARME RAYÉE 1 COUP","ARME RAYÉE SEMI AUTOMATIQUE","ARME RAYÉE A BARILLET","ARME RAYÉE CANONS JUXTAPOSES","ARME RAYÉE A LEVIER","ARME RAYÉE A POMPE","ARME RAYÉE CANONS SUPERPOSES","ARME RAYÉE A CULASSE OU VERROU","CARABINE A GAZ COMPRIME","FUSIL D’ASSAUT","FUSIL MITRAILLEUR","MITRAILLEUSE","PISTOLET 1 COUP","PISTOLET SEMI AUTOMATIQUE","PISTOLET A AIR COMPRIME","PISTOLET A GRENAILLE","PISTOLET MITRAILLEUR","PISTOLET MULTI CANONS","REVOLVER 1 COUP","REVOLVER A AIR COMPRIME","REVOLVER A GRENAILLE","REVOLVER MULTI COUPS"]

    idx_arme = 0
    clicked_idx = -1

    xyMouseMove = {"x": -1, "y": -1}
    xyMouseDown = {"x": -1, "y": -1}
    xyMouseUp = {"x": -1, "y": -1}

    canvas.addEventListener("mousemove", function(event) {
        xyMouseMove = getMousePos(canvas, event)
    }, false)

    canvas.addEventListener("mousedown", function(event) {
        xyMouseDown = getMousePos(canvas, event)
    }, false)

    canvas.addEventListener("mouseup", function(event) {
        xyMouseUp = getMousePos(canvas, event)
    }, false)

    document.addEventListener("keydown", function(event) {
        if (event.keyCode == 38) {
            idx_arme = Math.max(idx_arme-1, 0)
        } else if (event.keyCode == 40) {
            idx_arme = Math.min(idx_arme+1, liste_classes.length-1)
        }
    }, false)

    window.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    }, false)

    imgs = {}
    for (d = 0; d < liste_classes.length; d++) {
        for (i = 1; i <= 4; i++) {
            imgs["exemples_images/" + liste_classes_img_names[d] + "/" + i] = new_image("exemples_images/" + liste_classes_img_names[d] + "/" + i)
        }
    }

    imgs["fleche_droite"] = new_image("fleche_droite.png")
    imgs["fleche_gauche"] = new_image("fleche_gauche.png")
    imgs["export"] = new_image("export.png")
}



function animate() {

    ///////////////////////////////////////////////////////////
    // AFFICHAGE
    ///////////////////////////////////////////////////////////

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(1920,0)
    ctx.lineTo(1920,120)
    ctx.lineTo(0,120)
    ctx.lineTo(0,0)
    ctx.fillStyle = "#333333"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(460,120)
    ctx.lineTo(1360,120)
    ctx.lineTo(1360,1080)
    ctx.lineTo(460,1080)
    ctx.lineTo(460,120)
    ctx.fillStyle = "#444444"
    ctx.fill()

    ctx.font = "48px Arial"
    ctx.textAlign = "center"

    str = "Type d'arme n°" + (1+idx_arme) + " : " + liste_classes[idx_arme]
    ctx.strokeStyle = "#000000"
    ctx.strokeText(str, 960, 50)
    ctx.fillStyle = "#ffffff"
    ctx.fillText(str, 960, 50)

//    text_width = ctx.measureText(str).width

    ctx.drawImage(imgs["fleche_gauche"], 960-20-100, 75, 40, 40)
    ctx.drawImage(imgs["fleche_droite"], 960-20+100, 75, 40, 40)

    if (xyMouseDown.x > 960-20-100 && xyMouseDown.x < 960-20-100+40 && xyMouseDown.y > 75 && xyMouseDown.y < 115) {
        idx_arme = Math.max(idx_arme-1, 0)
    } else if (xyMouseDown.x > 960-20+100 && xyMouseDown.x < 960-20+100+40 && xyMouseDown.y > 75 && xyMouseDown.y < 115) {
        idx_arme = Math.min(idx_arme+1, liste_classes.length-1)
    }

    if (clicked_idx == -1) {

        for (i = 0; i < 4; i++) {
            xc = 680+450*(i%2)
            yc = 360+450*Math.floor(i/2)
            img_width = imgs["exemples_images/" + liste_classes_img_names[idx_arme] + "/" + (i+1)].width
            img_height = imgs["exemples_images/" + liste_classes_img_names[idx_arme] + "/" + (i+1)].height

            if (img_width > img_height) {
                w = 400
                h = 400*img_height/img_width
            } else {
                w = 400*img_width/img_height
                h = 400
            }

            ctx.drawImage(imgs["exemples_images/" + liste_classes_img_names[idx_arme] + "/" + (i+1)], xc-0.5*w, yc-0.5*h, w, h)

            if (xyMouseDown.x > xc-0.5*w && xyMouseDown.x < xc+0.5*w && xyMouseDown.y > yc-0.5*h && xyMouseDown.y < yc+0.5*h) {
                clicked_idx = i
            }
        }
    } else {
        xc = 680+225
        yc = 360+225
        img_width = imgs["exemples_images/" + liste_classes_img_names[idx_arme] + "/" + (clicked_idx+1)].width
        img_height = imgs["exemples_images/" + liste_classes_img_names[idx_arme] + "/" + (clicked_idx+1)].height

        if (img_width > img_height) {
            w = 850
            h = 850*img_height/img_width
        } else {
            w = 850*img_width/img_height
            h = 850
        }

        ctx.drawImage(imgs["exemples_images/" + liste_classes_img_names[idx_arme] + "/" + (clicked_idx+1)], xc-0.5*w, yc-0.5*h, w, h)

        if (xyMouseDown.x > 0) {
            clicked_idx = -1
        }
    }

    ctx.textAlign = "left"
    ctx.font = "30px Arial"
    ctx.fillStyle = "#ffffff"
    ctx.strokeText("Nomenclature du modèle", 80, 180)
    ctx.fillText("Nomenclature du modèle", 80, 180)
    ctx.font = "18px Arial"

    interligne = 23

    for (i = 0; i < nomenclature.length; i++) {
        if (types[idx_arme] == i) {
            ctx.fillStyle = "#ffff00"
            if (i == 0) {
                ctx.fillStyle = "#ff0000"
            }
        }
        ctx.strokeText(abbreviations[i], 20, 220+interligne*i)
        ctx.fillText(abbreviations[i], 20, 220+interligne*i)

        ctx.strokeText(nomenclature[i], 80, 220+interligne*i)
        ctx.fillText(nomenclature[i], 80, 220+interligne*i)

        if (xyMouseDown.x > 20 && xyMouseDown.x < 80+ctx.measureText(nomenclature[i]).width && xyMouseDown.y > 220+interligne*i-11 && xyMouseDown.y < 220+interligne*i+11) {
            types[idx_arme] = i
            localStorage.setItem("types", JSON.stringify(types))
        }

        ctx.fillStyle = "#ffffff"
    }

    idx_min = Math.min(Math.max(idx_arme-17, 0), idx_arme, 195)
    idx_max = idx_min + 34

    list_idx = 0
    interligne = 23

    ctx.font = "30px Arial"
    ctx.fillStyle = "#ffffff"
    ctx.strokeText("Liste des modèles d'armes", 1420, 180)
    ctx.fillText("Liste des modèles d'armes", 1420, 180)
    ctx.font = "18px Arial"

    for (i = idx_min; i <= idx_max; i++) {
        ctx.fillStyle = "#ffffff"
        if (i == idx_arme) {
            ctx.fillStyle = "#ffff00"
        }
        ctx.textAlign = "right"
        ctx.strokeText((i+1), 1400, 220+interligne*list_idx)
        ctx.fillText((i+1), 1400, 220+interligne*list_idx)
        ctx.textAlign = "left"

        if (types[i] == 0) {
            ctx.fillStyle = "#ff0000"
        }
        ctx.strokeText(abbreviations[types[i]], 1420, 220+interligne*list_idx)
        ctx.fillText(abbreviations[types[i]], 1420, 220+interligne*list_idx)

        if (i == idx_arme) {
            ctx.fillStyle = "#ffff00"
        } else {
            ctx.fillStyle = "#ffffff"
        }

        if (xyMouseDown.x > 1380 && xyMouseDown.x < 1470+ctx.measureText(liste_classes[i]).width && xyMouseDown.y > 220+interligne*list_idx-11 && xyMouseDown.y < 220+interligne*list_idx+11) {
            idx_arme = i
        }

        ctx.strokeText(liste_classes[i], 1470, 220+interligne*list_idx)
        ctx.fillText(liste_classes[i], 1470, 220+interligne*list_idx)
        ctx.fillStyle = "#ffffff"
        list_idx += 1
    }

    ctx.drawImage(imgs["export"], 1800, 30, 60, 60)

    if (xyMouseMove.x > 1800 && xyMouseMove.x < 1860 && xyMouseMove.y > 30 && xyMouseMove.y < 90) {
        ctx.font = "24px Arial"
        ctx.textAlign = "center"
        ctx.strokeText("exporter", xyMouseMove.x, xyMouseMove.y+25)
        ctx.fillText("exporter", xyMouseMove.x, xyMouseMove.y+25)
        ctx.textAlign = "left"
    }

    if (xyMouseDown.x > 1800 && xyMouseDown.x < 1860 && xyMouseDown.y > 60 && xyMouseDown.y < 120) {
		downloadObjectAsJson(types, "nomenclature")
    }

    xyMouseDown = {"x": -1, "y": -1}
    requestAnimationFrame(animate)
}


function downloadObjectAsJson(exportObj, exportName) {

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj))
    var downloadAnchorNode = document.createElement('a')
    downloadAnchorNode.setAttribute("href",     dataStr)
    downloadAnchorNode.setAttribute("download", exportName + ".json")
    document.body.appendChild(downloadAnchorNode) // required for firefox
    downloadAnchorNode.click()
    downloadAnchorNode.remove()

}
