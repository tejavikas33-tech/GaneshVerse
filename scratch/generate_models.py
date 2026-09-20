import bpy
import os
import math

def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    for block in list(bpy.data.meshes):
        bpy.data.meshes.remove(block)
    for block in list(bpy.data.materials):
        bpy.data.materials.remove(block)

# -------------------------------------------------------------
# 1. GENERATE ECO GANESHA (Authentic 97k Shadu Clay Figurine)
# -------------------------------------------------------------
def build_eco_ganesha(output_path, test_blend_path):
    print("Building Eco Ganesha from 97k mesh...")
    clear_scene()
    
    bpy.ops.import_scene.gltf(filepath=test_blend_path)
    
    for obj in list(bpy.data.objects):
        if obj.name in ['Cube', 'Light', 'Camera']:
            bpy.data.objects.remove(obj, do_unlink=True)
            
    sculpt_meshes = [o for o in bpy.data.objects if o.type == 'MESH']
    print(f"Loaded {len(sculpt_meshes)} sculpt meshes for Eco Ganesha")
    
    # Scale from mm to meters
    for obj in sculpt_meshes:
        obj.scale = (0.011, 0.011, 0.011)
        bpy.ops.object.select_all(action='DESELECT')
        obj.select_set(True)
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
        
    # Authentic terracotta Shadu mati PBR material
    clay_mat = bpy.data.materials.new(name="EcoClay_Terracotta")
    clay_mat.use_nodes = True
    bsdf = clay_mat.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs["Base Color"].default_value = (0.74, 0.44, 0.26, 1.0)
        bsdf.inputs["Roughness"].default_value = 0.88
        bsdf.inputs["Metallic"].default_value = 0.04
        
    for obj in sculpt_meshes:
        obj.data.materials.clear()
        obj.data.materials.append(clay_mat)
        
    # Natural clay base plinth
    bpy.ops.mesh.primitive_cylinder_add(radius=0.85, depth=0.18, vertices=32, location=(0, 0, -0.09))
    base = bpy.context.active_object
    base.name = "EcoClay_Base"
    base_mat = bpy.data.materials.new(name="EcoClay_BaseMat")
    base_mat.use_nodes = True
    b_bsdf = base_mat.node_tree.nodes.get("Principled BSDF")
    if b_bsdf:
        b_bsdf.inputs["Base Color"].default_value = (0.55, 0.32, 0.18, 1.0)
        b_bsdf.inputs["Roughness"].default_value = 0.92
    base.data.materials.append(base_mat)
    
    # Sacred peepal leaf motifs around base
    for i in range(8):
        ang = (i / 8) * math.pi * 2
        lx = math.cos(ang) * 0.78
        ly = math.sin(ang) * 0.78
        bpy.ops.mesh.primitive_cylinder_add(radius=0.14, depth=0.04, vertices=16, location=(lx, ly, -0.06))
        leaf = bpy.context.active_object
        leaf.scale = (1.0, 0.45, 1.0)
        leaf.rotation_euler = (0, 0, ang)
        l_mat = bpy.data.materials.new(name=f"LeafMat_{i}")
        l_mat.use_nodes = True
        l_bsdf = l_mat.node_tree.nodes.get("Principled BSDF")
        if l_bsdf:
            l_bsdf.inputs["Base Color"].default_value = (0.24, 0.50, 0.22, 1.0)
            l_bsdf.inputs["Roughness"].default_value = 0.65
        leaf.data.materials.append(l_mat)
        
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.export_scene.gltf(filepath=output_path, export_format='GLB')
    print(f"Eco Ganesha successfully exported to {output_path}")

# -------------------------------------------------------------
# 2. GENERATE SHRI BAL GANESHA (Cute Lotus Pedestal + Modak Bowl)
# -------------------------------------------------------------
def build_bal_ganesha(output_path, test_blend_path):
    print("Building Shri Bal Ganesha from 97k mesh...")
    clear_scene()
    
    bpy.ops.import_scene.gltf(filepath=test_blend_path)
    
    for obj in list(bpy.data.objects):
        if obj.name in ['Cube', 'Light', 'Camera']:
            bpy.data.objects.remove(obj, do_unlink=True)
            
    sculpt_meshes = [o for o in bpy.data.objects if o.type == 'MESH']
    print(f"Loaded {len(sculpt_meshes)} sculpt meshes for Bal Ganesha")
    
    # Scale rounder & cuter proportions for Bal Ganesha
    for obj in sculpt_meshes:
        obj.scale = (0.0118, 0.0114, 0.0102)
        bpy.ops.object.select_all(action='DESELECT')
        obj.select_set(True)
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
        
    # Warm golden sandalwood / marble material
    sandal_mat = bpy.data.materials.new(name="BalSandalwood_Marble")
    sandal_mat.use_nodes = True
    s_bsdf = sandal_mat.node_tree.nodes.get("Principled BSDF")
    if s_bsdf:
        s_bsdf.inputs["Base Color"].default_value = (0.97, 0.74, 0.42, 1.0)
        s_bsdf.inputs["Roughness"].default_value = 0.32
        s_bsdf.inputs["Metallic"].default_value = 0.15
        
    for obj in sculpt_meshes:
        obj.data.materials.clear()
        obj.data.materials.append(sandal_mat)
        
    # 16-Petal Blooming Lotus Base (Padmasana)
    lotus_mat = bpy.data.materials.new(name="LotusPink")
    lotus_mat.use_nodes = True
    lp_bsdf = lotus_mat.node_tree.nodes.get("Principled BSDF")
    if lp_bsdf:
        lp_bsdf.inputs["Base Color"].default_value = (0.94, 0.30, 0.55, 1.0)
        lp_bsdf.inputs["Roughness"].default_value = 0.45
        
    gold_mat = bpy.data.materials.new(name="BalGold")
    gold_mat.use_nodes = True
    bg_bsdf = gold_mat.node_tree.nodes.get("Principled BSDF")
    if bg_bsdf:
        bg_bsdf.inputs["Base Color"].default_value = (1.0, 0.82, 0.22, 1.0)
        bg_bsdf.inputs["Metallic"].default_value = 0.88
        bg_bsdf.inputs["Roughness"].default_value = 0.22
        
    # Central lotus disk
    bpy.ops.mesh.primitive_cylinder_add(radius=0.82, depth=0.14, vertices=32, location=(0, 0, -0.07))
    lotus_center = bpy.context.active_object
    lotus_center.data.materials.append(gold_mat)
    
    # 16 Lotus Petals
    for i in range(16):
        ang = (i / 16) * math.pi * 2
        px = math.cos(ang) * 0.86
        py = math.sin(ang) * 0.86
        bpy.ops.mesh.primitive_cone_add(radius1=0.18, depth=0.30, vertices=12, location=(px, py, -0.04))
        petal = bpy.context.active_object
        petal.rotation_euler = (math.pi/5 * math.sin(ang), -math.pi/5 * math.cos(ang), ang)
        petal.scale = (1.0, 0.45, 1.0)
        petal.data.materials.append(lotus_mat)
        
    # Golden Modak Bowl in front of Bappa's trunk
    bpy.ops.mesh.primitive_cylinder_add(radius=0.25, depth=0.09, vertices=20, location=(0, 0.55, 0.08))
    bowl = bpy.context.active_object
    bowl.data.materials.append(gold_mat)
    
    # Steamed modaks (sweet dumplings)
    modak_mat = bpy.data.materials.new(name="ModakMat")
    modak_mat.use_nodes = True
    m_bsdf = modak_mat.node_tree.nodes.get("Principled BSDF")
    if m_bsdf:
        m_bsdf.inputs["Base Color"].default_value = (0.98, 0.95, 0.86, 1.0)
        m_bsdf.inputs["Roughness"].default_value = 0.4
        
    for mi in range(5):
        mang = (mi / 5) * math.pi * 2
        mx = math.cos(mang) * 0.11
        my = 0.55 + math.sin(mang) * 0.11
        bpy.ops.mesh.primitive_cone_add(radius1=0.065, depth=0.11, vertices=10, location=(mx, my, 0.16))
        m_obj = bpy.context.active_object
        m_obj.data.materials.append(modak_mat)
        
    bpy.ops.mesh.primitive_cone_add(radius1=0.075, depth=0.13, vertices=10, location=(0, 0.55, 0.23))
    top_modak = bpy.context.active_object
    top_modak.data.materials.append(modak_mat)
    
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.export_scene.gltf(filepath=output_path, export_format='GLB')
    print(f"Bal Ganesha successfully exported to {output_path}")

if __name__ == "__main__":
    base_dir = os.path.abspath("public/models")
    test_blend = os.path.join(base_dir, "test_blend.glb")
    
    build_eco_ganesha(os.path.join(base_dir, "ganesha_eco.glb"), test_blend)
    build_bal_ganesha(os.path.join(base_dir, "ganesha_bal.glb"), test_blend)
    print("ECO & BAL MODELS UPDATED WITH 97K MESH!")
