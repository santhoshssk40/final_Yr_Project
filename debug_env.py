import sys
import os

print(f"Python Executable: {sys.executable}")
print(f"CWD: {os.getcwd()}")
print("Trying to import xgboost...")
try:
    import xgboost
    print(f"SUCCESS: xgboost version {xgboost.__version__} imported from {xgboost.__file__}")
except ImportError as e:
    print(f"FAILURE: {e}")

print("Installed packages in environment:")
try:
    from importlib.metadata import distributions
    for dist in distributions():
        if "xgboost" in dist.metadata["Name"].lower():
            print(f" - {dist.metadata['Name']} {dist.version}")
except ImportError:
    pass
