import React from 'react';
import './History.css';

function History()
{
    return(
        <React.Fragment>

       
        
        <div className="historyContainer">
            
            
        <h2>Club History</h2>
                <img className="historyImage" src={process.env.PUBLIC_URL +'/images/History/chelsea.png'}/>
            
            <div className="clubHistory">
                <p>
                Chelsea was founded in 1905 by Gus Mears, an English businessman who had earlier bought the Stamford Bridge athletics stadium with the plan of transforming it into a football ground. His original idea was to rent it to an existing club, but after a deal with Fulham FC was halted, he got the idea to start a new club.
                </p>
                <h4>The biggest team in the capital</h4>
                <p>
                Chelsea would quickly prove to be a hit with the local supporters and established itself as the biggest club in the capital. In the late 1910s, the club became the first in Britain with an average attendance over 40,000.
                The huge attendance numbers made "The Pensioners", a nickname for the team, to one of the richest clubs in the country and made it possible to pay well reputed players. Chelsea become also home for the first non-British player in the Football League, the Danish Nils Middelboe, who arrived to the club in 1913.
                Yet, the first five decades of the club's existence were not overly fruitful. The team would be in constant motion between Division 1 and Division 2. In their second decade of existence, however, they managed to reach the FA Cup final for the first time.
                </p>
                <h4>First league title</h4>
                <p>
                Their first League title in 1955 was a shock for everyone, especially considering the club had finished in the bottom half of the league for most of the previous seasons. This unexpected success was not enough to turn their fortunes around, however, and the club soon returned to mediocrity.
                The mid-60s caught Chelsea at the height of their popularity, with many big-name celebrities becoming regular guests at Stamford Bridge. For the first time in their history, the club was seen as an actual contender. After securing their first League Cup in 1965, they followed it up with two more "firsts" by claiming an FA Cup in 1970 and a Cup Winners' Cup in 1971.
                </p>
                <h4>Debts and new ownership</h4>
                <p>
                As it turned out, those were their last trophies for a while; with many financial difficulties regarding the redevelopment of Stamford Bridge and the increased hooliganism among the club's fans, Chelsea soon found themselves in a precarious position.
                During the next couple of decades, Chelsea's on-field results were not much of a priority, as the club's officials were desperately fighting to avoid bankruptcy. The ownership of the Mears family was interrupted when the club was sold for the symbolic sum of £1 to the new owner Ken Bates in 1982.    
                </p>
                <h4>Return to the spotlight</h4>
                <p>
                The club did not return to the spotlight until 1996 and the appointment of Ruud Gullit as player-manager. With the celebrated Dutchman at the helm and a strike force led by Italian internationals Gianluca Vialli and Gianfranco Zola, Chelsea were once again one of the most exciting clubs in English football. While the club did not manage to go all the way in the Premier League during this period, they did enjoy some Cup success with two FA Cup victories in 1997 and 2000 and a League Cup triumph in 1998. To top it off, they also claimed their second Cup Winners' Cup in 1998 by defeating Stuttgart 1-0 in the final.
                Chelsea was at this period a team hugely dominated by foreign players. A game on Boxing Day 1999 marked a new era in British league football, when the Chelsea side against Southampton consisted of the first "all-overseas XI". No British player was starting the match; the players were: Ed De Goey (Holland), Albert Ferrer (Spain), Frank Lebouef (France), Emerson Thome (Brazil), Dan Petrescu (Romania), Celestine Babayaro (Nigeria), Gus Poyet (Uruguay), Didier Deschamps (France), Roberto Di Matteo (Italy), Gabriele Ambrosetti (Italy) and Tore Andre Flo (Norway).   
                </p>
                <h4>Russian billionaire becomes the club's new owner</h4>
                <p>
                In 2003, Chelsea's landscape changed forever when the club was sold to Russian billionaire Roman Abramovich. The new owner immediately led Chelsea to an era of financial stability, paying off the majority of the club's debts and spending a then-unprecedented amount of money on star signings. Still, it wasn't until José Mourinho's arrival that all the pieces fell into place; under the controversial Portuguese manager, Chelsea won back-to-back Premier League titles in 2005 and 2006, as well as two League Cups in 2005 and 2007 and an FA Cup in 2007.
                Even after Mourinho had left the club due to a number of disagreements with Abramovich, Chelsea continued to be a dominant force in English football, winning one more league title, two FA Cups, a Champions League and a Europa League in the next six years. Chelsea had never previously won the European Cup/Champions League or UEFA Cup/Europe League.  
                </p>
                <img className="historyImage" src={process.env.PUBLIC_URL+'/images/History/initialSquad.png'} />
                <p>
                Shortly after Mourinho's return in 2013, the club won another League Cup and their fifth league title. After a long period of weak performance, Chelsea sacked José Mourinho in 2015.    
                </p>
                <img className="historyImage" src={process.env.PUBLIC_URL+'/images/History/team.png'} />
            </div>
        </div> </React.Fragment>
    )
}

export default History;