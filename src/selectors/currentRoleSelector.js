const currentRoleSelector = (auth, players) => {
    if(!auth.player){
        return false
    } else{
        return players[auth.player].role;
    }
    
}

export default currentRoleSelector;