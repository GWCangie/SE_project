"use strict";

function change1()
{
    var sb = document.getElementById("b1");
    console.log( typeof sb );

    if ( !( sb.style.border ) )
    {
    	console.log( "border is none" );
    	sb.style.border = "4px solid red";
    }
    else
    	console.log( "could not distinguish border" );
}