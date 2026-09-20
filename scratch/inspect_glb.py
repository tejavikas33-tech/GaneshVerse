import struct, json
import numpy as np

# In Three.js:
# Node 31 has rot = [-0.70710688829422, 0, 0, 0.7071066498756409]
# Node 30 has rot = [0.70710688829422, 0, 0, 0.7071066498756409], scale = [0.01, 0.01, 0.01]
# Node 28 has rot = [-0.70710688829422, 0, 0, 0.7071066498756409], scale = [100, 100, 100]

# Notice:
# Node 30 and Node 28 cancel out rotations!
# (Rot +90 then -90 = identity).
# Scale 0.01 * 100 = 1.0.
# So relative to Node 31, Mesh_0 vertices are:
# (x, y, z)
# Now Node 31 has rot = -90 deg around X:
# Q = [-sqrt(0.5), 0, 0, sqrt(0.5)]
# If v = (vx, vy, vz), rotated by Q:
# (vx, vz, -vy)
# And then translated by Node 31 position (px, py, pz):
# World vertex = (vx + px, vz + py, -vy + pz)

# Let's verify with Mesh_0 min/max:
# vx in [-0.839, 0.838]
# vy in [-0.836, 0.838]
# vz in [-0.998, 1.002]

# So in world space:
# World X = vx + px -> in [-0.839 + px, 0.838 + px]
# World Y = vz + py -> in [-0.998 + py, 1.002 + py] (bottom is at py - 0.998, top is at py + 1.002!)
# World Z = -vy + pz -> in [-0.838 + pz, 0.836 + pz]

print("If py = 0, bottom of statue is at Y = -0.998!")
print("Cushion top is at Y = +0.10.")
print("So to put statue bottom on cushion top: py - 0.998 = 0.10 => py = 1.10!")
print("And backrest is at Z = +0.65.")
print("World Z of statue: center is at pz. To sit nicely against backrest (Z in [0, 0.65]): pz around 0.15 to 0.20!")





