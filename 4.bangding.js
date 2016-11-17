function bangD(id) {

    var obj = document.getElementById(id);
    obj.addEventListener('mousedown',fnDown);

    function fnDown(ev) {

        var disX = ev.pageX - obj.offsetLeft;
        var disY = ev.pageY - obj.offsetTop;

        document.addEventListener('mousemove',fnMove);
        document.addEventListener('mouseup',fnUp);
        function fnMove(ev) {
            var l1 = ev.pageX - disX;
            var t1 = ev.pageY - disY;

            var b1 = t1 + obj.offsetHeight;
            var r1 = l1 + obj.offsetWidth;

            var l2 = obj2.offsetLeft;
            var t2 = obj2.offsetTop;
            var b2 = t2 + obj2.offsetHeight;
            var r2 = l2 + obj2.offsetWidth;



            if(r1 < l2 || b1 < t2 || r2 < l1 || b2 < t1) {
                obj2.className = 'back1';
            }else {
                obj2.className = 'back';
            }


            obj.style.left = ev.pageX - disX + 'px';
            obj.style.top = ev.pageY - disY + 'px';

        }
        function fnUp() {
            document.removeEventListener('mousemove',fnMove);
            document.removeEventListener('mouseup',fnUp);
        }
        ev.preventDefault();
    }
}
