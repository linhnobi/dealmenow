
export class Greeter {
    modalCloseButton: any;
    btnFlexa: any;
    constructor() {

    }

    greet(): void {
        this.appendPopup();
        setTimeout(() => {
            this.showPopupDefault();
        }, 5000);

        this.showPopupFocus();
        this.addListenClickEle();

        const comment = document.getElementById('SECTION465');
        const commentTop = this.getOffsetElement(comment).top;
        const form = document.getElementById('SECTION1034');
        const formTop = this.getOffsetElement(form).top;
        window.addEventListener("scroll", function (event) {

            const top = this.scrollY,
                left = this.scrollX;
            const topELe = Math.round(commentTop)
            if (formTop < top && top < topELe) {
                document.getElementById('modal__window_footer').style.visibility = 'visible';
                document.getElementById('modal__window_footer').style.opacity = '1';
            }

        }, false);
    }

    private showPopupDefault() {
        this.showModal();
    }

    private appendPopup() {
        const html = `<div class="s-modal" id="modal__window" style="position: fixed;left: 0;right: 0;top: 0;bottom: 0;background: rgba(0, 0, 0, 0.5);visibility: hidden;opacity: 0;transition: 1s;">
            <div class="cookiesContent" id="cookiesPopup" style="width: 320px; display: flex; flex-direction: column;align-items: center;background-color: #fff;color: #000;text-align: center;border-radius: 20px;padding: 30px 30px 70px;position: absolute;transform: translate(-50%, -50%);top: 50%;left: 50%;">
            <button class="s-close-modal" style="width: 30px;font-size: 20px;color: #c0c5cb;align-self: flex-end;background-color: transparent;border: none;margin-bottom: 10px;">✖</button>
            <img src="https://www.flaticon.com/svg/static/icons/svg/2913/2913782.svg" alt="cookies-img" style="width: 82px;margin-bottom: 15px;"/>
            <p style="margin-bottom: 40px;font-size: 18px;">We use cookies for improving user experience, analytics and marketing.</p>
            <button class="accept" style="background-color: #ed6755;border: none; border-radius: 5px;width: 200px;padding: 14px;font-size: 16px;color: white;box-shadow: 0px 6px 18px -5px rgba(237, 103, 85, 1);">That's fine!</button>
            </div>
            </div>`
            ;

        const htmlFooter = `<div class="s-modal-footer" id="modal__window_footer" style="visibility: hidden;opacity: 0;transition: 1s;">
            <div class="" id="" style="border:1px solid #cdcdcd;width: 50%; display: flex; flex-direction: column;align-items: center;background-color: #fff;color: #000;text-align: center;padding: 30px 30px;position: fixed;transform: translate(-50%, -50%);bottom: -73px;left: 50%;">
            <button class="s-close-modal-ft" style="width: 30px;font-size: 20px;color: #c0c5cb;align-self: flex-end;background-color: transparent;border: none;margin-bottom: 10px;">✖</button>
            <p style="margin-bottom: 40px;font-size: 18px;">We use cookies for improving user experience, analytics and marketing.</p>
            </div>  
            </div>`
            ;
        const div = document.createElement('div');
        div.innerHTML = html;
        document.getElementById('lightbox-screen').insertAdjacentHTML('afterend', html);
        document.getElementById('modal__window').insertAdjacentHTML('afterend', htmlFooter);
        this.modalCloseButton = document.querySelector(".s-close-modal");
        this.modalCloseButton.addEventListener("click", () => {
            this.closeModal();
        });
        const btnModalFt = document.querySelector(".s-close-modal-ft");
        btnModalFt.addEventListener('click', () => {
            document.getElementById('modal__window_footer').style.visibility = 'hidden';
            document.getElementById('modal__window_footer').style.opacity = '0';
        })
    }

    private showPopupFocus() {
        const _this = this;
        document.addEventListener("mouseleave", function (event) {
            if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
                _this.showModal();
            }
        });

    }

    private closeModal() {
        document.getElementById('modal__window').style.visibility = 'hidden';
        document.getElementById('modal__window').style.opacity = '0';
    };

    private showModal() {
        document.getElementById('modal__window').style.visibility = 'visible';
        document.getElementById('modal__window').style.opacity = '1';
    };

    private addListenClickEle() {
        const nodes = document.getElementsByTagName('span');
        const arrays = Array.prototype.slice.call(nodes);
        arrays.forEach((array: any) => {
            if (array.innerHTML.trim() === 'Flexa') {
                array.classList.add("btn-flexa");
                array.addEventListener("click", this.btnFlexaClick);
            }
        })
    }

    private btnFlexaClick() {
        if (!document.getElementById('SECTION1034')) {
            return;
        }
        document.getElementById("SECTION1034").scrollIntoView();
    }

    private getOffsetElement(el: any) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}