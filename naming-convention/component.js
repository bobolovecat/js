var component = {
    updated(){},
    activated(){},
    beforeDestroy(){},
    // ❌ afterDestroy(){}
    // ✅
    
}

var component = {
    afterUpdate(){},
    afterActivate(){},
    // ❌ destroyed(){}
    // ✅
    
}