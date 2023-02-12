// You can paint an asperand by pixels in three steps:

// First you paint the inner square, with a side of k.
// Then you need to paint one pixel, that's laying diagonally relative to the inner square that you just painted ( the bottom-right corner of the inner square is touching the top-left corner of the pixel ). Let's call it the "bridge".
// Finally, you will need to paint the outer shape, connected diagonally to the "bridge" ( see the picture for more information ).
// Here are some examples of this:

// Examples for 0<k<5

function countPixels(k){
    return Math.max(11,8*k+2)
  }

  const countPixels = k => (k === 1) + 8 * k + 2;
