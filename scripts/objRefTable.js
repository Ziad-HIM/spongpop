const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Follow,
		C3.Behaviors.Sin,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Camera3D,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetOpacity
	];
};
self.C3_JsPropNameTable = [
	{Follow: 0},
	{Sine: 0},
	{Sprite: 0},
	{ed25a32052d6a922b4b43ef12edbe: 0},
	{Solid: 0},
	{Screenshot_20241123_at_13821_PMremovebgpreview: 0},
	{Platform: 0},
	{Screenshot_20241123_at_14159_PMremovebgpreview: 0},
	{Screenshot_20241123_at_14703_PMremovebgpreview: 0},
	{"3DCamera": 0},
	{pngtreeacheeseburgerpngimage_13066978removebgpreview: 0},
	{f515b63b60d83fd3f576a4fe37d66e7removebgpreview: 0},
	{VSB18AngleWhiteremovebgpreview: 0},
	{Screenshot20241123At21901PM: 0},
	{removebgpreview: 0},
	{Keyboard: 0},
	{Sprite2: 0},
	{ed25a32052d6a922b4b43ef12edbe2: 0},
	{cartoongoldcoinsvectorclipartremovebgpreview: 0},
	{Screenshot_20241123_at_44947_PMremovebgpreview: 0},
	{Screenshot_20241123_at_45111_PMremovebgpreview: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	ed25a32052d6a922b4b43ef12edbe: class extends self.ISpriteInstance {},
	Screenshot_20241123_at_13821_PMremovebgpreview: class extends self.ISpriteInstance {},
	Screenshot_20241123_at_14159_PMremovebgpreview: class extends self.ISpriteInstance {},
	Screenshot_20241123_at_14703_PMremovebgpreview: class extends self.ISpriteInstance {},
	_3DCamera: class extends self.IInstance {},
	pngtreeacheeseburgerpngimage_13066978removebgpreview: class extends self.ISpriteInstance {},
	f515b63b60d83fd3f576a4fe37d66e7removebgpreview: class extends self.ISpriteInstance {},
	VSB18AngleWhiteremovebgpreview: class extends self.ISpriteInstance {},
	Screenshot20241123At21901PM: class extends self.ISpriteInstance {},
	removebgpreview: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	ed25a32052d6a922b4b43ef12edbe2: class extends self.ISpriteInstance {},
	cartoongoldcoinsvectorclipartremovebgpreview: class extends self.ISpriteInstance {},
	Screenshot_20241123_at_44947_PMremovebgpreview: class extends self.ISpriteInstance {},
	Screenshot_20241123_at_45111_PMremovebgpreview: class extends self.ISpriteInstance {}
}