#pragma strict

var skinnedMesh : SkinnedMeshRenderer[];
function Start () {
    transform.localScale = new Vector3(0.01, 0.01, 0.01);
    skinnedMesh = gameObject.GetComponentsInChildren.<SkinnedMeshRenderer>();
    
    for (var meshrend : SkinnedMeshRenderer in skinnedMesh)
    {
        meshrend.enabled = false;
    }
    
    Invoke("EnableMesh", 1.5);
}

function Update () {
    var meep : Vector3 = new Vector3(0.375, 0.375, 0.375);
    transform.localScale = Vector3.Lerp(transform.localScale, meep, Time.deltaTime*0.5);
}

function EnableMesh()
{
    for (var meshrend : SkinnedMeshRenderer in skinnedMesh)
    {
        meshrend.enabled = true;
    }
    
}
