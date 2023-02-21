(function ($) {
    "use strict";

    function remove_text(textClass, replacedText) {

        const mLhasSubmenuEL = $(`.${textClass}`);
        mLhasSubmenuEL.each(function () {
            if ($(this).find("> a:first").text().includes(replacedText)) {
                let textFull = $(this).find("> a:first").text(); // Find has child inner text
                $(this).find("> a:first").text(textFull.replaceAll(replacedText, ""));
            }
        });
    }


    function ghost_dropdown(options) {

        // Default options
        let defultOptions = {
            targetElement: "ul li",
            hasChildrenClasses: "menu-item-has-children",
            hasChildDetectText: "[has_child]",
            hasChildrenIcon: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-caret-down' viewBox='0 0 16 16'><path d='M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z'/></svg>",
            hasMegaMenuDetectText: "[has_megamenu]",
            hasMegaMenuClasses: "menu-item-has-megamenu",
            submenuUlClasses: "ghost-submenu",
            subitemDetectText: "[subitem]",
            subitemLiClasses: "subitem"
        }

        //Marge defaultOptions 
        options = {
            ...defultOptions,
            ...options
        }


        // Target Element
        let targetElement = options.targetElement;

        //Default value 
        let hasChildrenClasses = options.hasChildrenClasses;
        let hasChildDetectText = options.hasChildDetectText;
        let hasMegaMenuClasses = options.hasMegaMenuClasses;
        let hasMegaMenuDetectText = options.hasMegaMenuDetectText;
        let hasChildrenIcon = options.hasChildrenIcon;
        let submenuUlClasses = options.submenuUlClasses;
        let subitemDetectText = options.subitemDetectText;
        let subitemLiClasses = options.subitemLiClasses;


        // Declare neccesary variable
        let parentEl = $(targetElement);
        let childEL = $(targetElement);
        let parentLen = 0;
        let domArrayElement = [];
        let indexPush = [];
        let elIndex = 0;
        let parentIndex = [];

        $(`${targetElement}`).parent().addClass('ghost-dropdown-menu');

        let that;
        // Find Dropdown parent element
        parentEl.each(function (index, element) {
            if ($(this).text().indexOf(hasChildDetectText) >= 0) {
                parentIndex.push(index); // Make dropdown parent array index
                parentLen++;

                $(this).push(element);
                $(this).addClass(hasChildrenClasses); // Add claas in dropdown   element

                $(this).append(`<ul class='${submenuUlClasses}'></ul>`); // Append submenu element

                $(targetElement).css("opacity", "1");
                $('.header-area').css("opacity", "1");
            }

            if ($(this).text().includes(hasMegaMenuDetectText)) {
                $(this).addClass(hasMegaMenuClasses);
                that = $(this);
            }
        });

        $(targetElement).css("opacity", "1");
        $('.header-area').css("opacity", "1");

        $(`.${hasChildrenClasses}`).append(hasChildrenIcon);

        if (!$(hasChildrenClasses).length) {
            $(targetElement).css("opacity", "1");
            $('.header-area').css("opacity", "1");
        }

        // Using loop to reach dropdown parent element
        for (let i = 0; i < parentLen; i++) {

            elIndex = 0 // Initial elemet value

            // Find subitem element
            childEL.each(function (index, element) {
                let subitem = $(this).text().includes(subitemDetectText); // Find subitem element

                if (subitem) {

                    if (elIndex >= parentIndex[i + 1]) { // Each loop will be break
                        return false; //Stoped each loop 
                    }

                    if (elIndex <= parentIndex[i + 1] || elIndex >= parentIndex[parentIndex.length - 1]) {

                        if (!indexPush.includes(index)) { //Check if not index already insert 
                            $(this).addClass(subitemLiClasses); // Add class in subitem element
                            let st = $(this).children().text(); // Find subitem inner text
                            $(this).children().text(st.replaceAll(subitemDetectText, "")); // Replace subitem inner text

                            domArrayElement.push(element); // Incert subitem element in dom array
                            indexPush.push(index); // incert subitem index in indexPush array

                        }
                    }

                }
                elIndex++; // increase element index value
            });


            $(`.${hasChildrenClasses} ul.${submenuUlClasses}:eq(${i})`).append(domArrayElement); // Append related subitem dom element into submenu 

            domArrayElement = []; // Make dom array element empty. 

        }
        remove_text(hasChildrenClasses, hasChildDetectText);


        if (options.multi_level) {
            multiLevel();
        }
        if (options.mega_menu) {
            megamenu(hasMegaMenuClasses, 3, 4, hasMegaMenuDetectText, submenuUlClasses);
        }


    }

    $(document).ready(function () {
        ghost_dropdown({
            targetElement: "ul.navbar-nav li",
            hasChildrenClasses: "menu-item-has-children ",
            hasChildrenIcon: '<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">            <path d="M1 0.866211L6.52874 6.86621L12.0575 0.866211" stroke="#202832" stroke-linecap="round" stroke-linejoin="round"/></svg>           ',
            hasChildDetectText: "[has_child]", 
            submenuUlClasses: "ghost-submenu",
            subitemDetectText: "[subitem]",
            subitemLiClasses: "subitem",
            multi_level: false, 
            mega_menu: false
        }); 
    });

}(jQuery));
