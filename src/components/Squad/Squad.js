import React from "react";
import "./Squad.css";

function Squad(){
    return(
        <div>
            <h3>Goalkeepers</h3>
            
            <div className="squadInfo">
            
                <div className="playerInfo">
                    
                    <img src={process.env.PUBLIC_URL+"/images/Squad/cabalero.png"}/>
                    <div>
                        <p><i class="fa fa-user"></i> Eduard Mendy</p>
                        <p><i class="fa fa-trophy"></i> Games Played: 25</p>
                    </div>
                </div>

                <div className="playerInfo">
                    
                    <img src={process.env.PUBLIC_URL+"/images/Squad/kepa.png"}/>
                    <div>
                        <p><i class="fa fa-user"></i> Kepa Arizabalaga </p>
                        <p><i class="fa fa-trophy"></i> Games Played: 17 </p>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}
export default Squad;