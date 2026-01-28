def get_top_features(model, feature_names, top_n=3):
    importances = model.feature_importances_
    ranked = sorted(
        zip(feature_names, importances),
        key=lambda x: x[1],
        reverse=True
    )
    return [f[0] for f in ranked[:top_n]]
