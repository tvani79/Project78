var images = [
    https://www.google.com/url?sa=i&url=https%3A%2F%2Fparenting.firstcry.com%2Farticles%2Fcontribution-birth-of-a-baby-is-rebirth-of-a-mother%2F&psig=AOvVaw1mbohXl5Bxv_vOyYoubETD&ust=1614829296387000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCugIeak-8CFQAAAAAdAAAAABAD
    https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.momjunction.com%2Farticles%2Fhow-to-be-a-good-father_00427023%2F&psig=AOvVaw0HyRHsqZpU0gkPAGdFmJqJ&ust=1614829308840000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCemo6ak-8CFQAAAAAdAAAAABAD
    https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.parenthub.com.au%2Fpretty-young-girl%2F&psig=AOvVaw1GFL6RIrs0k1L4kozjRtWY&ust=1614828959162000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNi4he6Yk-8CFQAAAAAdAAAAABAD

];

var i=0;
function nextSlide(){
    if(i==3){
        i=0;
    }
    document.getElementById("first_image").src=images[i];
    i++
}