import test from 'tape'

export default (title,body) => {
    let counts = 0
    body(()=>{ counts += 1 })
    
    test(title,(t)=>{
        t.plan(counts)
        body(subTopic)
        function subTopic(subTitle,subBody){
            t.equal(subBody(),true,subTitle)
        }
    })
}
